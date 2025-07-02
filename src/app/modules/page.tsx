'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { modulesByRole, type Module } from "@/lib/modules-data";

function ModuleCard({ module }: { module: Module }) {
    const { t } = useAppContext();
    const isCompleted = module.status === 'Completed';

    return (
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
            <div className="flex items-center gap-4">
                {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                    <div className="w-6 h-6 flex-shrink-0 rounded-full border-2 border-muted-foreground" />
                )}
                <div>
                    <h3 className="font-semibold">{t(module.title)}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{module.duration} {t('moduleDurationMin')}</span>
                    </p>
                </div>
            </div>
            <Button asChild variant={isCompleted ? 'outline' : 'default'} size="sm">
                <Link href={`/modules/${module.slug}`}>
                    {isCompleted ? t('moduleActionReview') : t('moduleActionStart')}
                    <PlayCircle className="ml-2 w-4 h-4" />
                </Link>
            </Button>
        </div>
    )
}

export default function ModulesPage() {
    const { role, t } = useAppContext();
    const roleData = modulesByRole[role];
    const { modules } = roleData;

    const titleKey = {
        Patient: "pathTitlePatient",
        Donor: "pathTitleDonor",
        Caregiver: "pathTitleCaregiver"
    }[role];

    return (
        <div className="space-y-8">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl">{t(titleKey)}</CardTitle>
                    <CardDescription>
                        {t('pathDescription')}
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="space-y-4">
                {modules.map((module) => (
                    <ModuleCard key={module.slug} module={module} />
                ))}
            </div>
        </div>
    );
}
