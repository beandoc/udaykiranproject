
import type { ReactNode } from 'react';
import enContent from '@/lib/content-data.en';
import hiContent from '@/lib/content-data.hi';
import mrContent from '@/lib/content-data.mr';

export type ModuleContent = {
    standard: ReactNode;
    eli10: ReactNode;
};

export type ModuleContentData = { [key: string]: ModuleContent };

const allContent: { [lang: string]: ModuleContentData } = {
    en: enContent,
    hi: hiContent,
    mr: mrContent,
};

export const getContentDataForLang = (language: string): ModuleContentData => {
    return allContent[language] || allContent['en'];
};
