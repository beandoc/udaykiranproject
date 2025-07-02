'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppContext } from "@/context/app-context";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { User, HeartHandshake, AlertTriangle, Users } from "lucide-react";

export default function ReadinessPage() {
    const { t, role } = useAppContext();

    const donorQuestions = [
        "donorQ1", "donorQ2", "donorQ3", "donorQ4", "donorQ5", "donorQ6"
    ];

    const patientQuestions = [
        "patientQ1", "patientQ2", "patientQ3", "patientQ4", "patientQ5", "patientQ6", "patientQ7"
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('readinessTitle')}</h1>
            
            <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>{t('readinessAlertTitle')}</AlertTitle>
                <AlertDescription>
                    {t('readinessAlertDesc')}
                </AlertDescription>
            </Alert>

            <Tabs defaultValue={role.toLowerCase()} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="patient">
                        <User className="mr-2 h-4 w-4" />
                        {t('readinessPatientTab')}
                    </TabsTrigger>
                    <TabsTrigger value="donor">
                        <HeartHandshake className="mr-2 h-4 w-4" />
                        {t('readinessDonorTab')}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="patient">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('readinessPatientTitle')}</CardTitle>
                            <CardDescription>{t('readinessPatientDesc')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {patientQuestions.map((qKey, index) => (
                                    <AccordionItem value={`item-${index}`} key={qKey}>
                                        <AccordionTrigger className="text-left font-semibold">{t(`${qKey}_q`)}</AccordionTrigger>
                                        <AccordionContent className="text-base">
                                            {t(`${qKey}_a`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="donor">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('readinessDonorTitle')}</CardTitle>
                            <CardDescription>{t('readinessDonorDesc')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                {donorQuestions.map((qKey, index) => (
                                     <AccordionItem value={`item-${index}`} key={qKey}>
                                        <AccordionTrigger className="text-left font-semibold">{t(qKey)}</AccordionTrigger>
                                        <AccordionContent className="text-base">
                                             {t(`${qKey}_a`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}