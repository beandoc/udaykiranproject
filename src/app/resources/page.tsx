'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { resources, type Resource } from "@/lib/resources-data";

function renderResourceMedia(resource: Resource, language: string) {
    if (resource.type === 'video' && resource.isYoutube) {
        // YouTube videos always have a string src
        const videoSrc = typeof resource.src === 'string' ? resource.src : '';
        if (!videoSrc) return null;
        return (
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full rounded-lg border"
                    src={videoSrc}
                    title={resource.titleKey}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
    
    // Logic for local videos and podcasts
    let mediaSrc = '';
    if (typeof resource.src === 'object' && resource.src !== null) {
        // Handle language-specific sources
        const sources = resource.src as { [key: string]: string | undefined };
        mediaSrc = sources[language] || sources['en'] || Object.values(sources).find(s => !!s) || '';
    } else if (typeof resource.src === 'string') {
        // Handle single-source local media
        mediaSrc = resource.src;
    }

    if (!mediaSrc) {
        return <p className="text-muted-foreground text-sm">Media for your selected language is not yet available.</p>;
    }

    if (resource.type === 'video') { // Local video
         return (
            <div className="aspect-video w-full">
                <video
                    controls
                    src={mediaSrc}
                    className="w-full h-full rounded-lg border bg-black"
                    key={mediaSrc}
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
                src={mediaSrc}
                className="w-full"
                key={mediaSrc} // Add key to force re-render on language change
            >
                Your browser does not support the audio element.
            </audio>
        );
    }
    return null;
}


export default function ResourcesPage() {
  const { t, language } = useAppContext();
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
                    {renderResourceMedia(resource, language)}
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
