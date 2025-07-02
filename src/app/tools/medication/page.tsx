'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { AlertTriangle, Pill } from "lucide-react";

export default function MedicationGuidePage() {
  const { t } = useAppContext();
  
  const medications = [
    {
        name: "Tacrolimus",
        instructions: [
            t('medsTacrolimus1'),
            t('medsTacrolimus2'),
            t('medsTacrolimus3'),
            t('medsTacrolimus4'),
            t('medsTacrolimus5'),
        ],
        warning: t('medsGrapefruitWarning')
    },
    {
        name: "Cyclosporine",
        instructions: [
            t('medsCyclosporine1'),
            t('medsCyclosporine2'),
            t('medsCyclosporine3'),
            t('medsCyclosporine4'),
            t('medsCyclosporine5'),
        ],
        warning: t('medsGrapefruitWarning')
    },
    {
        name: "Mycophenolate Mofetil (MMF)",
        instructions: [
            t('medsMmf1'),
            t('medsMmf2'),
        ]
    },
     {
        name: "Azathioprine",
        instructions: [
            t('medsAzathioprine1'),
            t('medsAzathioprine2'),
        ]
    },
    {
        name: "Prednisolone",
        instructions: [
            t('medsPrednisolone1'),
            t('medsPrednisolone2'),
        ]
    }
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">{t('medicationTitle')}</h1>
      
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-xl">{t('medsIntroTitle')}</CardTitle>
            <CardDescription>{t('medsIntroDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {medications.map(med => (
                    <AccordionItem value={med.name} key={med.name}>
                        <AccordionTrigger className="text-lg font-semibold">
                            <div className="flex items-center gap-3">
                                <Pill className="h-5 w-5 text-primary" />
                                <span>{med.name}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-4 text-base">
                            <ul className="list-disc list-inside space-y-3">
                                {med.instructions.map((inst, index) => (
                                    <li key={index}>{inst}</li>
                                ))}
                            </ul>
                            {med.warning && (
                                <Alert variant="destructive">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>{t('medsWarningTitle')}</AlertTitle>
                                    <AlertDescription>
                                        {med.warning}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
       </Card>
    </div>
  );
}
