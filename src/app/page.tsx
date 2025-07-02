'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, MessageSquare, Pill, Star, User, Users, UserCheck } from "lucide-react";
import Link from "next/link";
import { useAppContext, type Role, type Activity } from "@/context/app-context";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const roles = [
    { name: 'Patient', icon: User, descriptionKey: 'rolePatientDesc' },
    { name: 'Donor', icon: UserCheck, descriptionKey: 'roleDonorDesc' },
    { name: 'Caregiver', icon: Users, descriptionKey: 'roleCaregiverDesc' },
] as const;

const iconMap: { [key: string]: LucideIcon } = {
  CheckCircle,
  Star,
  MessageSquare,
};

function formatTimeAgo(timestamp: number, t: (key: string) => string): string {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
    const days = Math.floor(seconds / (24 * 60 * 60));

    if (days >= 2) {
        return t('timeDaysAgo', { count: days });
    }
    if (days === 1) {
        return t('timeYesterday');
    }
    const hours = Math.floor(seconds / 3600);
    if (hours >= 1) {
        return t('timeHoursAgo', { count: hours });
    }
    return t('timeJustNow');
}


export default function Home() {
    const { role, setRole, t, activities } = useAppContext();

    const quickLinks = [
        { href: '/tools/medication', labelKey: 'linkMeds', descriptionKey: 'linkMedsDesc', icon: Pill },
        { href: '#', labelKey: 'linkFollow', descriptionKey: 'linkFollowDesc', icon: MessageSquare },
    ]

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
                 <Heart className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10" />
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{t('quickLinks')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {quickLinks.map((link) => (
                            <Link href={link.href} key={link.labelKey} className="block p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <link.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{t(link.labelKey)}</p>
                                        <p className="text-sm text-muted-foreground">{t(link.descriptionKey)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{t('recentActivity')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {activities.map((activity) => {
                            const Icon = iconMap[activity.icon];
                            return (
                                <div key={activity.id} className="flex items-center gap-4">
                                    <div className={cn("p-3 rounded-full", activity.color)}>
                                        {Icon && <Icon className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{t(activity.textKey, activity.options)}</p>
                                        <p className="text-xs text-muted-foreground">{formatTimeAgo(activity.timestamp, t)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{t('defineRole')}</CardTitle>
                    <CardDescription>{t('selectRolePrompt')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {roles.map((r) => (
                        <button
                            key={r.name}
                            onClick={() => setRole(r.name as Role)}
                            className={cn(
                                "p-6 text-left rounded-lg border-2 transition-all flex flex-col items-center justify-center text-center",
                                role === r.name
                                ? "bg-primary/10 border-primary"
                                : "bg-card hover:bg-muted/50"
                            )}
                        >
                            <r.icon className={cn(
                                "w-10 h-10 mb-4",
                                role === r.name ? "text-primary" : "text-muted-foreground"
                            )} />
                            <h3 className="font-bold text-lg">{t(`role${r.name}`)}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{t(r.descriptionKey)}</p>
                        </button>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
