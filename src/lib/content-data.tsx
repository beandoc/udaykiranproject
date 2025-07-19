
import { contentData as enContent } from '@/lib/content-data.en';
import { contentData as hiContent } from '@/lib/content-data.hi';
import { contentData as mrContent } from '@/lib/content-data.mr';

export type ModuleContent = {
    standard: string; // Now a raw string
    eli10: string;    // Now a raw string
};

export type ModuleContentData = { [key: string]: ModuleContent };

const allContent: { [lang: string]: ModuleContentData } = {
    en: enContent,
    hi: hiContent,
    mr: mrContent,
};

export const getContentDataForLang = (language: string): ModuleContentData => {
    // Default to English if a slug doesn't exist in the target language
    const primaryContent = allContent[language] || allContent['en'];
    const fallbackContent = allContent['en'];

    // Create a proxy to merge primary and fallback content
    // This ensures that if a module is missing a translation, it uses the English version.
    return new Proxy(fallbackContent, {
        get(target, prop) {
            const key = prop as string;
            if (primaryContent && key in primaryContent) {
                return primaryContent[key];
            }
            return target[key];
        },
    });
};
