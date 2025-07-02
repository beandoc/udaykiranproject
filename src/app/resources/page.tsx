'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import Image from "next/image";

export default function ResourcesPage() {
  const { t } = useAppContext();
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">{t('resourcesTitle')}</h1>
      <Card className="text-center">
            <div className="relative w-full h-64">
                <Image
                    src="https://placehold.co/800x300.png"
                    data-ai-hint="library books"
                    alt="A library with shelves full of books."
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('resourcesWipTitle')}</CardTitle>
                <CardDescription>
                    {t('resourcesWipDesc')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{t('resourcesWipCheckBack')}</p>
            </CardContent>
       </Card>
    </div>
  );
}
