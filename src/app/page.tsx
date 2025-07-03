'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, UserCheck, Users, PlayCircle, HeartPulse, PartyPopper } from "lucide-react";
import Link from "next/link";
import { useAppContext, type Role } from "@/context/app-context";
import { cn } from "@/lib/utils";

const roles = [
    { name: 'Patient', icon: User, descriptionKey: 'rolePatientDesc' },
    { name: 'Donor', icon: UserCheck, descriptionKey: 'roleDonorDesc' },
    { name: 'Caregiver', icon: Users, descriptionKey: 'roleCaregiverDesc' },
] as const;

export default function Home() {
    const { role, setRole, t, modulesByRole } = useAppContext();
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
    const nextModule = nextModuleIndex !== -1 ? modules[nextModuleIndex] : null;

    return (
        <div className="space-y-8">
            <Card className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl">
                <div className="p-8">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
                        {t('welcome', { role: t(`role${role}`) })}
                    </h1>
                    <p className="mt-2 max-w-2xl text-lg text-primary-foreground/80">
                        {t('personalizedHub')}
                    </p>
                    <Button asChild size="lg" className="mt-6 bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6 text-base font-semibold">
                        <Link href="/modules">{t('exploreLearningPath')}</Link>
                    </Button>
                </div>
                 <HeartPulse className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10" />
            </Card>

            <div className="space-y-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{t('defineRole')}</CardTitle>
                        <CardDescription>{t('selectRolePrompt')}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {roles.map((r) => (
                            <button
                                key={r.name}
                                onClick={() => setRole(r.name as Role)}
                                className={cn(
                                    "p-4 text-left rounded-lg border-2 transition-all duration-200 ease-in-out flex flex-col items-center justify-center text-center hover:-translate-y-1 h-32",
                                    role === r.name
                                    ? "bg-primary/10 border-primary scale-105 shadow-lg"
                                    : "bg-card hover:bg-muted/50"
                                )}
                            >
                                <r.icon className={cn(
                                    "w-8 h-8 mb-3",
                                    role === r.name ? "text-primary" : "text-muted-foreground"
                                )} />
                                <h3 className="font-bold">{t(`role${r.name}`)}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{t(r.descriptionKey)}</p>
                            </button>
                        ))}
                    </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{t('pathProgressTitle')}</CardTitle>
                            <CardDescription>{t(titleKey)}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 flex flex-col justify-center">
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
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="/modules">
                                    {t('continueLearning')} <PlayCircle className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {nextModule ? (
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{t('nextUpPrompt')}</CardTitle>
                                <CardDescription>{t(nextModule.title)}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-primary/20" />
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/modules/${nextModule.slug}`}>
                                        {t('moduleActionStart')}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ) : (
                         <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{t('allModulesCompleteTitle')}</CardTitle>
                                <CardDescription>{t('allModulesCompleteDesc')}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-center justify-center">
                                <PartyPopper className="w-16 h-16 text-primary/20" />
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href="/modules">
                                        {t('reviewYourPath')}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
