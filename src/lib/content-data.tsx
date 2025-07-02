import type { ReactNode } from 'react';
import { contentData as enContent } from '@/lib/content-data.en';
import { contentData as hiContent } from '@/lib/content-data.hi';
import { contentData as mrContent } from '@/lib/content-data.mr';

export type ModuleContent = { [key: string]: ReactNode };

const allContent: { [lang: string]: ModuleContent } = {
    en: enContent,
    hi: hiContent,
    mr: mrContent,
};

export const getContentDataForLang = (language: string): ModuleContent => {
    return allContent[language] || allContent['en'];
};

// This export is now for reading time calculation and needs to be handled carefully.
// We export the English content by default for this purpose if no language is specified.
export const contentData = allContent['en'];
