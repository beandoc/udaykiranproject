
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/app-context";

export default function ResourcesPage() {
  const { t } = useAppContext();
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">{t('resourcesTitle')}</h1>
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">{t('resourcesVideoTitle')}</CardTitle>
            <CardDescription>
                {t('resourcesVideoDesc')}
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full rounded-lg border"
                    src="https://www.youtube.com/embed/fELn4Fe9Ccc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">{t('resourcesStepsTitle')}</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep1Title')}</span> {t('resourcesStep1Desc')}
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep2Title')}</span> {t('resourcesStep2Desc')}
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep3Title')}</span> {t('resourcesStep3Desc')}
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep4Title')}</span> {t('resourcesStep4Desc')}
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep5Title')}</span> {t('resourcesStep5Desc')}
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold">{t('resourcesStep6Title')}</span> {t('resourcesStep6Desc')}
                        </div>
                    </li>
                </ul>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
