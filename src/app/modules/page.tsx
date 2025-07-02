'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, PlayCircle, Star } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import type { Module } from "@/lib/modules-data";
import { contentData } from "@/lib/content-data";
import { calculateReadingTime } from "@/lib/utils";

function ModuleCard({ module, isNext }: { module: Module, isNext: boolean }) {
    const { t } = useAppContext();
    const isCompleted = module.status === 'Completed';
    const duration = calculateReadingTime(contentData[module.slug]);

    return (
        <div className={`flex items-center justify-between p-4 bg-card rounded-lg border transition-all ${isNext && !isCompleted ? 'border-primary shadow-md' : ''}`}>
            <div className="flex items-center gap-4">
                {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                    <div className={`w-6 h-6 flex-shrink-0 rounded-full border-2 ${isNext ? 'border-primary' : 'border-muted-foreground'}`} />
                )}
                <div>
                    <h3 className="font-semibold flex items-center gap-2">
                        {t(module.title)}
                        {isNext && !isCompleted && (
                            <Badge variant="outline" className="border-primary/80 text-primary bg-primary/10">
                                <Star className="w-3 h-3 mr-1.5" />
                                {t('nextUpBadge')}
                            </Badge>
                        )}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{duration} {t('moduleDurationRead')}</span>
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
    const { role, t, modulesByRole } = useAppContext();
    const roleData = modulesByRole[role];
    const { modules } = roleData;

    const titleKey = {
        Patient: "pathTitlePatient",
        Donor: "pathTitleDonor",
        Caregiver: "pathTitleCaregiver"
    }[role];

    const completedModules = modules.filter(m => m.status === 'Completed').length;
    const totalModules = modules.length;
    const progress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
    const nextModuleIndex = modules.findIndex(m => m.status === 'Not Started');

    return (
        <div className="space-y-8">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl">{t(titleKey)}</CardTitle>
                    <CardDescription>
                        {t('pathDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm font-medium text-muted-foreground">
                                {t('modulesCompleted', { completed: completedModules, total: totalModules })}
                            </p>
                            <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} />
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {modules.map((module, index) => (
                    <ModuleCard key={module.slug} module={module} isNext={index === nextModuleIndex} />
                ))}
            </div>
        </div>
    );
}
