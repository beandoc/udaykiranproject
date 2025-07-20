'use client';

import { useAppContext } from "@/context/app-context";
import { getContentDataForLang } from "@/lib/content-data";

export default function ResponsibilitiesPage() {
    const { t, language } = useAppContext();

    // The content is now managed in the dedicated content file
    const contentData = getContentDataForLang(language)['patient-responsibilities'];

    if (!contentData) {
        return <div>Content not available.</div>
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{t('navYourResponsibilities')}</h1>
            <div 
                className="prose dark:prose-invert max-w-none text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: contentData.standard }}
            />
        </div>
    );
}
