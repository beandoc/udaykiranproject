'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppContext } from "@/context/app-context";
import { User, HeartHandshake, Users } from "lucide-react";

export default function FaqPage() {
    const { t, role } = useAppContext();

    const patientFaqs = Array.from({ length: 10 }, (_, i) => `patientFaq${i + 1}`);
    const donorFaqs = Array.from({ length: 10 }, (_, i) => `donorFaq${i + 1}`);
    const caregiverFaqs = Array.from({ length: 10 }, (_, i) => `caregiverFaq${i + 1}`);

    const defaultTab = role.toLowerCase();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('faqTitle')}</h1>
            
            <Card>
                <CardHeader>
                    <CardTitle>{t('faqTitle')}</CardTitle>
                    <CardDescription>{t('faqDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue={defaultTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="patient">
                                <User className="mr-2 h-4 w-4" />
                                {t('faqPatientTab')}
                            </TabsTrigger>
                            <TabsTrigger value="donor">
                                <HeartHandshake className="mr-2 h-4 w-4" />
                                {t('faqDonorTab')}
                            </TabsTrigger>
                            <TabsTrigger value="caregiver">
                                <Users className="mr-2 h-4 w-4" />
                                {t('faqCaregiverTab')}
                            </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="patient" className="mt-6">
                            <Accordion type="single" collapsible className="w-full">
                                {patientFaqs.map((qKey, index) => (
                                    <AccordionItem value={`patient-${index}`} key={qKey}>
                                        <AccordionTrigger className="text-left font-semibold">{t(`${qKey}_q`)}</AccordionTrigger>
                                        <AccordionContent className="text-base">
                                            {t(`${qKey}_a`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="donor" className="mt-6">
                            <Accordion type="single" collapsible className="w-full">
                                {donorFaqs.map((qKey, index) => (
                                     <AccordionItem value={`donor-${index}`} key={qKey}>
                                        <AccordionTrigger className="text-left font-semibold">{t(`${qKey}_q`)}</AccordionTrigger>
                                        <AccordionContent className="text-base">
                                             {t(`${qKey}_a`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="caregiver" className="mt-6">
                             <Accordion type="single" collapsible className="w-full">
                                {caregiverFaqs.map((qKey, index) => (
                                     <AccordionItem value={`caregiver-${index}`} key={qKey}>
                                        <AccordionTrigger className="text-left font-semibold">{t(`${qKey}_q`)}</AccordionTrigger>
                                        <AccordionContent className="text-base">
                                             {t(`${qKey}_a`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
