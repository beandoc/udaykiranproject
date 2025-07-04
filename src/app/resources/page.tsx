'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { resources, type Resource } from "@/lib/resources-data";

function renderResourceMedia(resource: Resource) {
    if (resource.type === 'video' && resource.isYoutube) {
        return (
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full rounded-lg border"
                    src={resource.src}
                    title={resource.titleKey}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
    if (resource.type === 'video' && !resource.isYoutube) {
         return (
            <div className="aspect-video w-full">
                <video
                    controls
                    src={resource.src}
                    className="w-full h-full rounded-lg border bg-black"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
    if (resource.type === 'podcast') {
        return (
            <audio
                controls
                src={resource.src}
                className="w-full"
            >
                Your browser does not support the audio element.
            </audio>
        );
    }
    return null;
}


export default function ResourcesPage() {
  const { t } = useAppContext();
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline tracking-tight mb-8">{t('resourcesTitle')}</h1>
      <div className="space-y-8">
        {resources.map((resource, index) => (
            <Card key={index}>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <resource.icon className="w-7 h-7 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-2xl">{t(resource.titleKey)}</CardTitle>
                            <CardDescription className="mt-1">
                                {t(resource.descriptionKey)}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {renderResourceMedia(resource)}
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
