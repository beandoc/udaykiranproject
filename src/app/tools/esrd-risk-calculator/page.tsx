
'use client';

import * as React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator, Copy, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Label } from '@/components/ui/label';

const FormSchema = z.object({
  age: z.coerce.number().min(18, { message: "Age must be between 18 and 80." }).max(80, { message: "Age must be between 18 and 80." }),
  sex: z.enum(['Male', 'Female']),
  race: z.enum(['White', 'Black']).default('White'),
  eGFR: z.coerce.number().min(60, { message: "eGFR must be 60 or higher." }),
  sbp: z.coerce.number(),
  htnMed: z.enum(['Yes', 'No']),
  bmi: z.coerce.number().min(20, { message: "BMI must be between 20 and 40." }).max(40, { message: "BMI must be between 20 and 40." }),
  diabetes: z.enum(['Yes', 'No']),
  acr: z.coerce.number().min(3, { message: "ACR must be between 3 and 280 mg/g." }).max(280, { message: "ACR must be between 3 and 280 mg/g." }),
  smokingHistory: z.enum(['Non-Smoker', 'Former Smoker', 'Current Smoker']),
});

type FormValues = z.infer<typeof FormSchema>;

type CalculationResult = {
    risk15Year: number;
    riskLifetime: number;
} | null;

// Calculation data from the NEJM 2016 paper's appendix
const Hx_data = {
    'Male': {
        'White': {
            '15_year': { '15-25': 0.03, '25-34': 0.04, '35-44': 0.05, '45-54': 0.08, '55-64': 0.16, '65-74': 0.32, '75-80': 0.50 },
            'lifetime': { '15-25': 0.22, '25-34': 0.23, '35-44': 0.25, '45-54': 0.31, '55-64': 0.42, '65-74': 0.53, '75-80': 0.59 }
        },
        'Black': {
            '15_year': { '15-25': 0.07, '25-34': 0.09, '35-44': 0.15, '45-54': 0.27, '55-64': 0.48, '65-74': 0.77, '75-80': 1.10 },
            'lifetime': { '15-25': 0.76, '25-34': 0.81, '35-44': 0.85, '45-54': 0.90, '55-64': 0.94, '65-74': 0.95, '75-80': 0.96 }
        }
    },
    'Female': {
        'White': {
            '15_year': { '15-25': 0.02, '25-34': 0.03, '35-44': 0.04, '45-54': 0.07, '55-64': 0.13, '65-74': 0.24, '75-80': 0.39 },
            'lifetime': { '15-25': 0.18, '25-34': 0.20, '35-44': 0.29, '45-54': 0.36, '55-64': 0.47, '65-74': 0.60, '75-80': 0.69 }
        },
        'Black': {
            '15_year': { '15-25': 0.05, '25-34': 0.06, '35-44': 0.10, '45-54': 0.18, '55-64': 0.32, '65-74': 0.53, '75-80': 0.79 },
            'lifetime': { '15-25': 1.23, '25-34': 1.25, '35-44': 1.28, '45-54': 1.30, '55-64': 1.33, '65-74': 1.35, '75-80': 1.36 }
        }
    }
};

const eGFRbase_data = { '15-25': 114, '25-34': 106, '35-44': 98, '45-54': 90, '55-64': 82, '65-74': 74, '75-80': 66 };

const getAgeGroup = (age: number) => {
    if (age >= 18 && age <= 24) return '15-25';
    if (age >= 25 && age <= 34) return '25-34';
    if (age >= 35 && age <= 44) return '35-44';
    if (age >= 45 && age <= 54) return '45-54';
    if (age >= 55 && age <= 64) return '55-64';
    if (age >= 65 && age <= 74) return '65-74';
    if (age >= 75 && age <= 80) return '75-80';
    return null;
}

export default function EsrdRiskCalculatorPage() {
    const { toast } = useToast();
    const [results, setResults] = React.useState<CalculationResult>(null);
    const form = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        mode: 'onBlur',
        defaultValues: {
            race: 'White',
        }
    });
    
    const formValues = form.watch();

    const calculateESRDRisk = (data: FormValues) => {
        const ageGroup = getAgeGroup(data.age);
        if (!ageGroup) return;

        // Assume race is 'White' for all calculations as per instruction
        const race = 'White';

        const hx_15_year = Hx_data[data.sex][race]['15_year'][ageGroup as keyof typeof Hx_data.Male.White['15_year']];
        const hx_lifetime = Hx_data[data.sex][race]['lifetime'][ageGroup as keyof typeof Hx_data.Male.White['lifetime']];
        const eGFRbase = eGFRbase_data[ageGroup as keyof typeof eGFRbase_data];

        // eGFR splines
        const eGFR1 = (60.0 - Math.min(data.eGFR, 60.0)) / 15.0;
        const eGFR2 = (Math.min(eGFRbase, 90.0) - Math.max(Math.min(data.eGFR, 90.0), 60.0)) / 15.0;
        const eGFR3 = (Math.max(eGFRbase, 90.0) - Math.max(Math.min(data.eGFR, 120.0), 90.0)) / 15.0;
        const eGFR4 = (120.0 - Math.max(data.eGFR, 120.0)) / 15.0;
        
        // BMI splines - corrected implementation
        const BMI1 = (Math.min(data.bmi, 30) - 25) / 5;
        const BMI2 = (Math.max(data.bmi, 30) - 30) / 5;
        
        // Calculate B value
        let B = 0;
        B += (1.8879 * eGFR1);
        B += (0.4884 * eGFR2);
        B += (0.0203 * eGFR3);
        B -= (0.2420 * eGFR4);
        B += (0.3500 * (data.sbp - 120.0) / 20.0);
        if (data.htnMed === 'Yes') B += 0.3012;
        B += (-0.0241 * BMI1);
        B += (0.1474 * BMI2);
        if (data.diabetes === 'Yes') B += 1.1008;
        B += 1.0772 * (Math.log10(data.acr) - Math.log10(4.0));
        if (data.smokingHistory === "Former Smoker") B += 0.3700;
        else if (data.smokingHistory === "Current Smoker") B += 0.5680;

        const e_to_the_B = Math.exp(B);
        
        const esrd_incidence_15_year = (1 - Math.pow((1 - hx_15_year / 100), e_to_the_B)) * 100;
        const esrd_incidence_lifetime = (1 - Math.pow((1 - hx_lifetime / 100), e_to_the_B)) * 100;
        
        setResults({ risk15Year: esrd_incidence_15_year, riskLifetime: esrd_incidence_lifetime });
    };

    const copyResults = () => {
        if (!results) return;
        const resultsText = `ESRD Risk Tool for Kidney Donor Candidates Results:
- Pre-Donation 15-Year Risk: ${results.risk15Year.toFixed(2)}%
- Pre-Donation Lifetime Risk: ${results.riskLifetime.toFixed(2)}%

Note: This model does not take into account the added risk from donation. Previous studies have estimated that the 15-year increase in relative risk of ESRD from kidney donation may be at least 5-fold.

Reference: Grams ME, Sang Y, Levey AS, et al. Kidney-Failure Risk Projection for the Living Kidney-Donor Candidate. NEJM 2016; 374:411-421.`;
        navigator.clipboard.writeText(resultsText).then(() => {
            toast({ title: "Results Copied", description: "The ESRD risk results have been copied to your clipboard." });
        });
    };

    const filledFields = Object.values(formValues).filter(val => val !== undefined && val !== null && val !== '').length;
    const totalFields = Object.keys(FormSchema.shape).length;
    const progressPercentage = (filledFields / totalFields) * 100;

    return (
      <div className="space-y-6">
          <header>
            <h1 className="text-3xl font-bold font-headline tracking-tight">ESRD Risk Tool for Kidney Donor Candidates</h1>
            <p className="text-muted-foreground">15-year and lifetime risk for kidney donors.</p>
          </header>

          <Tabs defaultValue="calculator" className="w-full">
            <TabsList>
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="references">References</TabsTrigger>
            </TabsList>
            <TabsContent value="calculator" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Questions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(calculateESRDRisk)} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="age" render={({ field }) => ( <FormItem><FormLabel>Age (18-80 years)</FormLabel><FormControl><Input type="number" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} /></FormControl><FormMessage /></FormItem> )} />
                                            <FormField
                                                control={form.control}
                                                name="sex"
                                                render={({ field }) => (
                                                    <FormItem>
                                                    <FormLabel>Sex</FormLabel>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex items-center pt-2 space-x-4"
                                                        >
                                                        <FormItem className="flex items-center space-x-2">
                                                            <FormControl>
                                                                <RadioGroupItem value="Male" id="sex-male"/>
                                                            </FormControl>
                                                            <Label htmlFor="sex-male" className="font-normal">Male</Label>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-2">
                                                            <FormControl>
                                                                <RadioGroupItem value="Female" id="sex-female"/>
                                                            </FormControl>
                                                            <Label htmlFor="sex-female" className="font-normal">Female</Label>
                                                        </FormItem>
                                                    </RadioGroup>
                                                    <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField control={form.control} name="eGFR" render={({ field }) => ( <FormItem><FormLabel>eGFR (mL/min/1.73m²)</FormLabel><FormControl><Input type="number" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} /></FormControl><FormMessage /></FormItem> )} />
                                            <FormField control={form.control} name="sbp" render={({ field }) => ( <FormItem><FormLabel>Systolic Blood Pressure (mmHg)</FormLabel><FormControl><Input type="number" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} /></FormControl><FormMessage /></FormItem> )} />
                                             <FormField
                                                control={form.control}
                                                name="htnMed"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Antihypertensive Medication</FormLabel>
                                                        <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex items-center pt-2 space-x-4"
                                                        >
                                                        <FormItem className="flex items-center space-x-2">
                                                            <FormControl>
                                                                <RadioGroupItem value="Yes" id="htn-yes"/>
                                                            </FormControl>
                                                            <Label htmlFor="htn-yes" className="font-normal">On medication</Label>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-2">
                                                            <FormControl>
                                                                <RadioGroupItem value="No" id="htn-no" />
                                                            </FormControl>
                                                            <Label htmlFor="htn-no" className="font-normal">None</Label>
                                                        </FormItem>
                                                        </RadioGroup>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField control={form.control} name="bmi" render={({ field }) => ( <FormItem><FormLabel>BMI (20-40 kg/m²)</FormLabel><FormControl><Input type="number" step="0.1" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} /></FormControl><FormMessage /></FormItem> )} />
                                            <FormField
                                                control={form.control}
                                                name="diabetes"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Diabetes</FormLabel>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex items-center pt-2 space-x-4"
                                                            >
                                                                <FormItem className="flex items-center space-x-2">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="Yes" id="diabetes-yes"/>
                                                                    </FormControl>
                                                                    <Label htmlFor="diabetes-yes" className="font-normal">Yes</Label>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-2">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="No" id="diabetes-no"/>
                                                                    </FormControl>
                                                                    <Label htmlFor="diabetes-no" className="font-normal">No</Label>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField control={form.control} name="acr" render={({ field }) => ( <FormItem><FormLabel>Urine Albumin to Creatinine (3-280 mg/g)</FormLabel><FormControl><Input type="number" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)}/></FormControl><FormMessage /></FormItem> )} />
                                        </div>
                                         <FormField control={form.control} name="smokingHistory" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Smoking History</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger><SelectValue placeholder="Select smoking history" /></SelectTrigger></FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Non-Smoker">Non-Smoker</SelectItem>
                                                        <SelectItem value="Former Smoker">Former Smoker</SelectItem>
                                                        <SelectItem value="Current Smoker">Current Smoker</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="pt-4">
                                            <Button type="submit" className="w-full" size="lg">
                                                <Calculator className="mr-2 h-5 w-5" /> Calculate Risk
                                            </Button>
                                        </div>

                                        <div className="space-y-2 pt-4">
                                          <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>Progress</span>
                                            <span>{filledFields} / {totalFields - 1} fields completed</span>
                                          </div>
                                          <Progress value={progressPercentage} />
                                        </div>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Results</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Pre-Donation 15-Year Risk*</Label>
                                    <div className="p-4 bg-muted rounded-md text-2xl font-bold text-center">
                                        {results ? `${results.risk15Year.toFixed(2)}%` : '--.--%'}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Pre-Donation Lifetime Risk*</Label>
                                    <div className="p-4 bg-muted rounded-md text-2xl font-bold text-center">
                                        {results ? `${results.riskLifetime.toFixed(2)}%` : '--.--%'}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Important Note</AlertTitle>
                            <AlertDescription>
                                *This model does not take into account the added risk from donation. Previous studies have estimated that the 15-year increase in relative risk of ESRD from kidney donation may be at least 5-fold.
                            </AlertDescription>
                        </Alert>
                        {results && (
                           <Button onClick={copyResults} variant="outline" className="w-full">
                               <Copy className="mr-2 h-4 w-4"/> Copy Results
                           </Button>
                        )}
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>About The Calculator</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <h3 className="font-semibold text-foreground">Pre-donation projected risk of end-stage renal disease (in the absence of kidney donation):</h3>
                        <p>This model is intended for low-risk adults considering living kidney donation in the United States. It provides an estimate of the 15-year and lifetime incidence of end-stage renal disease given a set of demographic and baseline (pre-donation) health characteristics. It does not take into account any added risk a donor might incur due to the nephrectomy or resultant single kidney status. For risk factors that are not captured in this risk tool, estimates reflect the US population average. Please note that some studies have found higher risk associated with obesity; caution is suggested when considering potential donors with higher BMI, particularly in the younger age groups.</p>
                        <p>The study population used to derive risk estimates included the low-risk subgroup of 7 general population cohorts with median follow up ranging from 4 - 16 years. Risk factor associations were determined using Cox proportional hazards models. Absolute risk was calibrated to annual ESRD incidence estimate derived from actual ESRD incidence from the United States Renal Data System and mortality from the United States Census.</p>
                        <h3 className="font-semibold text-foreground mt-4">Post-donation projected risk of end-stage renal disease (after kidney donation):</h3>
                        <p>Previous studies have estimated that the 15-year increase in relative risk of ESRD from kidney donation may be at least 5-fold. At the present time we do not have data on the lifetime post-donation risk of ESRD according to a donor candidate's characteristics.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="references" className="mt-6">
                 <Card>
                    <CardHeader>
                        <CardTitle>References</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p className="font-semibold">Grams ME, Sang Y, Levey AS, Matsushita K, Ballew S, Chang AR et al.</p>
                        <p>Kidney-Failure Risk Projection for the Living Kidney-Donor Candidate. NEJM 2016; 374:411-421.</p>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
      </div>
    );
}

    
