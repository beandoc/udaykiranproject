
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
            "Tacrolimus is a key medicine that stops your body from rejecting your new kidney. Most transplant patients take it. For it to work, you must take it exactly as prescribed.",
            "Take your dose at the same time every day to keep a stable level of the medicine in your body. Take it on an empty stomach (1 hour before or 2-3 hours after food).",
            "**Never change the brand of your Tacrolimus without talking to your doctor.** Different brands (like immediate-release, Astagraf XL, or Envarsus) are not the same and require different doses. Stick to the one your doctor prescribes.",
            "Common side effects include shakiness, headaches, and diarrhea. It can also affect your blood pressure or blood sugar. Always tell your transplant team about any side effects you notice.",
            "Never stop taking this medicine or change the dose on your own, even if you feel completely healthy. It works silently every day to protect your kidney."
        ],
        warning: "Do not drink grapefruit juice while taking this medication."
    },
    {
        name: "Cyclosporine",
        instructions: [
            "Take your dose at the same time each day. If you miss a dose, take it as soon as you remember unless it's nearly time for your next one. Never take two doses to make up for a missed one.",
            "Swallow capsules whole with a glass of water.",
            "If using the oral solution, you can mix it with orange or apple juice to improve the taste. After taking the solution, add a little more juice to the glass, swirl, and drink again to ensure you've taken the full dose.",
            "Compared to other medications, Cyclosporine is more likely to cause side effects like unwanted hair growth, swollen gums, or high blood pressure. Let your team know if you notice these.",
            "Do not have PUVA light therapy (a treatment for psoriasis) while taking Cyclosporine."
        ],
        warning: "Do not drink grapefruit juice while taking this medication."
    },
    {
        name: "Mycophenolate Mofetil (MMF)",
        instructions: [
            "This medication is very effective at preventing rejection. It's often preferred for its effectiveness and fewer side effects compared to older drugs.",
            "Take tablets with meals and swallow them whole. Do not chew, crush, or split them. Capsules should not be opened.",
            "The most common side effects are stomach-related, like diarrhea, nausea, or cramping. If these are a problem, your doctor might switch you to a different form (EC-MPS) which can be gentler on the stomach."
        ],
        warning: "This medication causes birth defects. It must NOT be used by women who are pregnant or might become pregnant unless they are using highly effective, long-acting contraception. If you are considering pregnancy, you must speak with your transplant team, as you will need to switch to a different medication like Azathioprine."
    },
     {
        name: "Azathioprine",
        instructions: [
            "This medication is an alternative to Mycophenolate. It is often used for patients who have side effects from Mycophenolate, or for women who are pregnant or planning to become pregnant.",
            "Take Azathioprine with or immediately after food to prevent an upset stomach.",
            "It can sometimes cause nausea or vomiting. It's important to continue taking it, but tell your doctor if these symptoms become severe.",
            "A serious side effect is a drop in your white blood cell count, which increases infection risk. Your team will monitor this closely with regular blood tests."
        ]
    },
    {
        name: "Prednisolone",
        instructions: [
            "Your daily dose of Prednisolone may consist of several tablets.",
            "It's common to take the entire daily dose all at once in the morning with food to reduce stomach irritation."
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
                                    <li key={index} dangerouslySetInnerHTML={{ __html: inst.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
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
