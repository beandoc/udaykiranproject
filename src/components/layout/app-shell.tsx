'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  HeartPulse,
  LayoutDashboard,
  Library,
  Pill,
  Heart,
  Bell,
  Moon,
  Globe,
  Contact,
  ListChecks
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/app-context';

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t, setLanguage } = useAppContext();

  const mainNav = [
    { href: '/', labelKey: 'navDashboard', icon: LayoutDashboard },
    { href: '/modules', labelKey: 'navEducationalModules', icon: BookOpen },
    { href: '/resources', labelKey: 'navResourceLibrary', icon: Library },
    { href: '/contacts', labelKey: 'navContacts', icon: Contact },
  ];
  
  const toolsNav = [
    { href: '/tools/medication', labelKey: 'toolImmunosuppressants', icon: Pill },
    { href: '/tools/symptoms', labelKey: 'toolSymptomLog', icon: HeartPulse },
    { href: '/dos-and-donts', labelKey: 'navDosAndDonts', icon: ListChecks },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
            <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Heart className="w-6 h-6 fill-current" />
                </div>
                 <div className="group-data-[collapsible=icon]:hidden">
                  <h1 className="text-lg font-headline font-bold text-foreground">{t('appTitle')}</h1>
                  <p className="text-xs text-muted-foreground">{t('appSubtitle')}</p>
                </div>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainNav.map((item) => (
                    <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                        <item.icon />
                        <span>{t(item.labelKey)}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
            <SidebarGroup className="mt-4">
                <SidebarGroupLabel>{t('groupHealthTools')}</SidebarGroupLabel>
                <SidebarMenu>
                    {toolsNav.map((item) => (
                        <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={pathname === item.href}>
                            <Link href={item.href}>
                            <item.icon />
                            <span>{t(item.labelKey)}</span>
                            </Link>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">{t('selectLanguage')}</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('en')}>{t('langEnglish')}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('hi')}>{t('langHindi')}</DropdownMenuItem>
                  <DropdownMenuItem disabled>{t('langMarathi')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">{t('notifications')}</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
                <Moon className="h-5 w-5" />
                <span className="sr-only">{t('toggleTheme')}</span>
            </Button>
            <div className="text-sm font-semibold text-foreground pr-2">
              Command Hospital Pune
            </div>
        </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
