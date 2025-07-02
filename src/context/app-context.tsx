'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export type Role = 'Patient' | 'Donor' | 'Caregiver';

type AppContextType = {
  role: Role;
  setRole: (role: Role) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('Patient');

  return (
    <AppContext.Provider value={{ role, setRole }}>
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
