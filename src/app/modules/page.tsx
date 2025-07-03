'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, PlayCircle, Star, PartyPopper, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import type { Module } from "@/lib/modules-data";
import { getContentDataForLang } from "@/lib/content-data";
import { cn } from '@/lib/utils';
import { buttonVariants, Button } from '@/components/ui/button';

// Helper to calculate reading time
const countWords = (node: React.ReactNode): number => {
    if (typeof node === 'string') {
        return node.trim().split(/\s+/).length;
    }
    if (React.isValidElement(node) && node.props.children) {
        return React.Children.toArray(node.props.children).reduce((acc, child) => acc + countWords(child), 0);
    }
    if (Array.isArray(node)) {
        return node.reduce((acc, child) => acc + countWords(child), 0);
    }
    return 0;
};

// Words per minute
const WPM = 200; 

const calculateReadingTime = (slug: string, language: string) => {
    const contentData = getContentDataForLang(language);
    const content = contentData[slug];
    const wordCount = countWords(content);
    const time = Math.ceil(wordCount / WPM);
    return Math.max(1, time); // Ensure at least 1 minute
}

function ModuleCard({ module, isNext }: { module: Module, isNext: boolean }) {
    const { t, language } = useAppContext();
    const isCompleted = module.status === 'Completed';
    const duration = calculateReadingTime(module.slug, language);

    return (
        <Link 
            href={`/modules/${module.slug}`} 
            className={cn(
                "block rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary/30",
                isNext && !isCompleted && "border-primary shadow-md"
            )}
        >
            <div className="flex items-center justify-between p-4">
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
                <div className={cn(
                    buttonVariants({ variant: isCompleted ? 'outline' : 'default', size: 'sm' }),
                    "pointer-events-none"
                )}>
                    {isCompleted ? t('moduleActionReview') : t('moduleActionStart')}
                    <PlayCircle className="ml-2 w-4 h-4" />
                </div>
            </div>
        </Link>
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
    const allModulesCompleted = totalModules > 0 && completedModules === totalModules;

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

            {allModulesCompleted ? (
                <Card>
                    <CardHeader className="items-center text-center">
                        <PartyPopper className="w-12 h-12 text-yellow-500" />
                        <CardTitle className="font-headline text-2xl mt-4">{t('allModulesCompleteTitle')}</CardTitle>
                        <CardDescription>{t('allModulesCompleteDesc')}</CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                        <Button asChild>
                            <Link href="/">{t('allModulesCompleteButton')}</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <ModuleCard key={module.slug} module={module} isNext={index === nextModuleIndex} />
                    ))}
                     <div className="flex justify-center pt-4">
                        <Button asChild variant="outline">
                            <Link href="/">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                {t('navDashboard')}
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
