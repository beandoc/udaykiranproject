
'use client';

import { usePathname } from 'next/navigation';
import { AppShell } from './app-shell';

export function AppShellWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';

    if (isLoginPage) {
        return <>{children}</>;
    }

    return <AppShell>{children}</AppShell>;
}
