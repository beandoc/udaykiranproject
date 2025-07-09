'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { BookOpen, ClipboardList, Clock, ShieldCheck, Users } from "lucide-react";

export default function ResponsibilitiesPage() {
    const { t } = useAppContext();

    const responsibilities = [
        {
            icon: BookOpen,
            titleKey: "respBeInformedTitle",
            points: ["respBeInformedPoint1", "respBeInformedPoint2"]
        },
        {
            icon: ClipboardList,
            titleKey: "respFollowPlanTitle",
            points: ["respFollowPlanPoint1", "respFollowPlanPoint2"]
        },
        {
            icon: Clock,
            titleKey: "respBeOnTimeTitle",
            points: ["respBeOnTimePoint1", "respBeOnTimePoint2"]
        },
        {
            icon: ShieldCheck,
            titleKey: "respFollowPoliciesTitle",
            points: ["respFollowPoliciesPoint1", "respFollowPoliciesPoint2"]
        },
        {
            icon: Users,
            titleKey: "respBeConsiderateTitle",
            points: ["respBeConsideratePoint1", "respBeConsideratePoint2"]
        }
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('responsibilitiesTitle')}</h1>
            
            <Card>
                <CardHeader>
                    <CardTitle>{t('responsibilitiesCardTitle')}</CardTitle>
                    <CardDescription>{t('responsibilitiesCardDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    {responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <responsibility.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{t(responsibility.titleKey)}</h4>
                                <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                                    {responsibility.points.map(pointKey => (
                                        <li key={pointKey}>{t(pointKey)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
