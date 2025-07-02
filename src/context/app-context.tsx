'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';

import en from '@/lib/locales/en.json';
import hi from '@/lib/locales/hi.json';
import mr from '@/lib/locales/mr.json';
import { modulesByRole as initialModulesByRole, type ModulesByRole as ModulesByRoleType, type Module } from '@/lib/modules-data';

type Translations = { [key: string]: string | { [key:string]: string } };
const translations: { [key: string]: Translations } = { en, hi, mr };

export type Role = 'Patient' | 'Donor' | 'Caregiver';
export type Language = 'en' | 'hi' | 'mr';

export type Activity = {
  id: string;
  textKey: string;
  timestamp: number;
  icon: 'CheckCircle' | 'Star' | 'MessageSquare';
  color: string;
  options?: { [key: string]: string | number };
};

type AppContextType = {
  role: Role;
  setRole: (role: Role) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
  activities: Activity[];
  modulesByRole: ModulesByRoleType;
  updateModuleStatus: (slug: string, role: Role) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialActivities: Activity[] = [
    { id: '1', textKey: 'activityPosted', timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000, icon: 'MessageSquare', color: 'text-purple-500 bg-purple-100' },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('Patient');
  const [language, setLanguage] = useState<Language>('en');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [modulesByRole, setModulesByRole] = useState<ModulesByRoleType>(initialModulesByRole);

  useEffect(() => {
    // This effect ensures initialActivities are set only on the client
    setActivities(initialActivities);
  }, []);

  const t = useCallback((key: string, options?: { [key: string]: string | number }) => {
    const langFile = translations[language] || translations['en'];
    let text: any = langFile[key];

    if(typeof text === 'undefined') return key;

    // Handle nested keys for pluralization (e.g., timeHoursAgo.one, timeHoursAgo.other)
    if (typeof text === 'object' && options && 'count' in options) {
        if (options.count === 1 && 'one' in text) {
            text = text.one;
        } else if ('other' in text) {
            text = text.other;
        } else {
            text = key; // Fallback
        }
    }

    if (options) {
        Object.keys(options).forEach(optionKey => {
            text = text.replace(`{{${optionKey}}}`, String(options[optionKey]));
        });
    }
    return text;
  }, [language]);
  
  const addActivity = useCallback((activity: Omit<Activity, 'id' | 'timestamp'>) => {
    const newActivity: Activity = {
        ...activity,
        id: new Date().toISOString() + Math.random(),
        timestamp: Date.now(),
    };
    setActivities(prev => [newActivity, ...prev].slice(0, 5));
  }, []);

  const updateModuleStatus = useCallback((slug: string, currentRole: Role) => {
    setModulesByRole(prev => {
        const newModulesByRole = JSON.parse(JSON.stringify(prev));
        const roleModules = newModulesByRole[currentRole].modules;
        const moduleIndex = roleModules.findIndex((m: Module) => m.slug === slug);

        if (moduleIndex !== -1 && roleModules[moduleIndex].status === 'Not Started') {
            roleModules[moduleIndex].status = 'Completed';
            
            // Add activity for module completion
            addActivity({
                textKey: 'activityCompleted',
                options: { moduleName: t(roleModules[moduleIndex].title) },
                icon: 'CheckCircle',
                color: 'text-green-500 bg-green-100'
            });

            const total = roleModules.length;
            const completed = roleModules.filter((m: Module) => m.status === 'Completed').length;
            
            if (completed === 1) {
                 addActivity({
                    textKey: 'activityEarnedNewbie',
                    icon: 'Star',
                    color: 'text-yellow-500 bg-yellow-100'
                });
            } else if (completed === Math.floor(total / 2)) {
                 addActivity({
                    textKey: 'activityEarnedHalfway',
                    icon: 'Star',
                    color: 'text-blue-500 bg-blue-100'
                });
            } else if (completed === total) {
                 addActivity({
                    textKey: 'activityEarnedCompletionist',
                    icon: 'Star',
                    color: 'text-purple-500 bg-purple-100'
                });
            }
        }
        return newModulesByRole;
    });
}, [addActivity, t]);

  return (
    <AppContext.Provider value={{ role, setRole, language, setLanguage, t, activities, modulesByRole, updateModuleStatus }}>
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
