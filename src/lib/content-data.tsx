import type { ReactNode } from 'react';
import enContent from '@/lib/content-data.en';
import hiContent from '@/lib/content-data.hi';
import mrContent from '@/lib/content-data.mr';

export type ModuleContent = { [key: string]: ReactNode };

const allContent: { [lang: string]: ModuleContent } = {
    en: enContent,
    hi: hiContent,
    mr: mrContent,
};

export const getContentDataForLang = (language: string): ModuleContent => {
    return allContent[language] || allContent['en'];
};
