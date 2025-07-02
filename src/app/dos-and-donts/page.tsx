'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { Pill, CalendarDays, GlassWater, PhoneForwarded, ShowerHead, ShieldQuestion, Apple, HeartPulse, ShieldOff, UserX, Bug, FlaskConical, Ban, UtensilsCrossed, SearchX } from "lucide-react";

export default function DosAndDontsPage() {
    const { t } = useAppContext();

    const dosList = [
        { icon: Pill, titleKey: 'dosTakeMedsTitle', descriptionKey: 'dosTakeMedsDesc' },
        { icon: CalendarDays, titleKey: 'dosKeepAppointmentsTitle', descriptionKey: 'dosKeepAppointmentsDesc' },
        { icon: GlassWater, titleKey: 'dosStayHydratedTitle', descriptionKey: 'dosStayHydratedDesc' },
        { icon: PhoneForwarded, titleKey: 'dosReportIssuesTitle', descriptionKey: 'dosReportIssuesDesc' },
        { icon: ShowerHead, titleKey: 'dosPracticeHygieneTitle', descriptionKey: 'dosPracticeHygieneDesc' },
        { icon: ShieldQuestion, titleKey: 'dosCheckNewMedsTitle', descriptionKey: 'dosCheckNewMedsDesc' },
        { icon: Apple, titleKey: 'dosWashProduceTitle', descriptionKey: 'dosWashProduceDesc' },
        { icon: HeartPulse, titleKey: 'dosExerciseSafelyTitle', descriptionKey: 'dosExerciseSafelyDesc' },
    ];
    
    const dontsList = [
        { icon: ShieldOff, titleKey: 'dontsStopMedsTitle', descriptionKey: 'dontsStopMedsDesc' },
        { icon: UserX, titleKey: 'dontsAvoidInfectionsTitle', descriptionKey: 'dontsAvoidInfectionsDesc' },
        { icon: Bug, titleKey: 'dontsIgnoreSymptomsTitle', descriptionKey: 'dontsIgnoreSymptomsDesc' },
        { icon: FlaskConical, titleKey: 'dontsCheckMedsTitle', descriptionKey: 'dontsCheckMedsDesc' },
        { icon: Ban, titleKey: 'dontsRiskySubstancesTitle', descriptionKey: 'dontsRiskySubstancesDesc' },
        { icon: UtensilsCrossed, titleKey: 'dontsFoodSafetyTitle', descriptionKey: 'dontsFoodSafetyDesc' },
        { icon: SearchX, titleKey: 'dontsGoogleDoctorTitle', descriptionKey: 'dontsGoogleDoctorDesc' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('dosAndDontsTitle')}</h1>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{t('dosTitle')}</CardTitle>
                    <CardDescription>{t('dosDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dosList.map((item) => (
                        <div key={item.titleKey} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">{t(item.titleKey)}</h4>
                                <p className="mt-1 text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{t('dontsTitle')}</CardTitle>
                    <CardDescription>{t('dontsDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dontsList.map((item) => (
                        <div key={item.titleKey} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <item.icon className="w-6 h-6 text-destructive" />
                            </div>
                            <div>
                                <h4 className="font-semibold">{t(item.titleKey)}</h4>
                                <p className="mt-1 text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
