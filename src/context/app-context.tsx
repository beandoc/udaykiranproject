'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback } from 'react';

import en from '@/lib/locales/en.json';
import hi from '@/lib/locales/hi.json';

// Define the structure of your translation files
type Translations = { [key: string]: string };

const translations: { [key: string]: Translations } = { en, hi };

export type Role = 'Patient' | 'Donor' | 'Caregiver';
export type Language = 'en' | 'hi';

type AppContextType = {
  role: Role;
  setRole: (role: Role) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('Patient');
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string, options?: { [key: string]: string | number }) => {
    let text = translations[language][key] || key;
    if (options) {
        Object.keys(options).forEach(optionKey => {
            text = text.replace(`{{${optionKey}}}`, String(options[optionKey]));
        });
    }
    return text;
  }, [language]);

  return (
    <AppContext.Provider value={{ role, setRole, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
