
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useTheme } from 'next-themes';
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
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  HeartPulse,
  LayoutDashboard,
  Library,
  Pill,
  Bell,
  Moon,
  Sun,
  Languages,
  Contact,
  ListChecks,
  ClipboardCheck,
  Sparkles,
  HelpCircle,
  Calculator,
  ClipboardList,
  LogOut,
  UserCog,
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/app-context';
import { logout } from '@/app/login/actions';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t, setLanguage } = useAppContext();
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const mainNav = [
    { href: '/', labelKey: 'navDashboard', icon: LayoutDashboard },
    { href: '/assistant', labelKey: 'navAssistant', icon: Sparkles },
    { href: '/modules', labelKey: 'navEducationalModules', icon: BookOpen },
    { href: '/resources', labelKey: 'navResourceLibrary', icon: Library },
    { href: '/responsibilities', labelKey: 'navYourResponsibilities', icon: ClipboardList },
    { href: '/readiness', labelKey: 'navReadiness', icon: ClipboardCheck },
    { href: '/contacts', labelKey: 'navContacts', icon: Contact },
  ];
  
  const toolsNav = [
    { href: '/tools/esrd-risk-calculator', label: 'ESRD Risk Tool', icon: Calculator },
    { href: '/tools/medication', labelKey: 'toolImmunosuppressants', icon: Pill },
    { href: '/tools/symptoms', labelKey: 'toolSymptomLog', icon: HeartPulse },
    { href: '/dos-and-donts', labelKey: 'navDosAndDonts', icon: ListChecks },
    { href: '/faq', labelKey: 'navFaq', icon: HelpCircle },
  ];

  const isAdminPage = pathname.startsWith('/admin');

  const handleLogout = async () => {
    // Clear client-side storage first
    if (typeof window !== 'undefined') {
        localStorage.removeItem('app-role');
        localStorage.removeItem('app-language');
        localStorage.removeItem('app-modules');
    }
    // Then call the server action to clear the cookie and redirect
    await logout();
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
            <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <HeartPulse className="w-6 h-6" />
                </div>
                 <div className="group-data-[collapsible=icon]:hidden">
                  <h1 className="text-lg font-headline font-bold text-sidebar-primary">{t('appTitle')}</h1>
                  <p className="text-xs text-muted-foreground">{t('appSubtitle')}</p>
                </div>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            {isAdminPage ? (
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === '/admin'}>
                            <Link href="/admin">
                                <UserCog />
                                <span>Admin Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            ) : (
                <>
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
                                <SidebarMenuButton asChild isActive={pathname.startsWith(item.href)}>
                                    <Link href={item.href}>
                                    <item.icon />
                                    <span>{(item as any).labelKey ? t((item as any).labelKey) : (item as any).label}</span>
                                    </Link>
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </>
            )}
        </SidebarContent>
         <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                     <SidebarMenuButton 
                        onClick={handleLogout}
                        variant="default" 
                        className={cn(
                            "w-full justify-start",
                            "bg-destructive/20 text-destructive-foreground hover:bg-destructive/30"
                        )}
                     >
                         <LogOut />
                         <span>Logout</span>
                     </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
         </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            {!isAdminPage && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium px-3">
                        <Languages className="mr-2 h-5 w-5" />
                        <span>{t('languageLabel')}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>{t('langEnglish')}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('hi')}>{t('langHindi')}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('mr')}>{t('langMarathi')}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">{t('notifications')}</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">{t('toggleTheme')}</span>
            </Button>
            <div className="text-sm font-semibold text-foreground pr-2">
              {isAdminPage ? "Admin" : "Command Hospital Pune"}
            </div>
        </div>
        </header>
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
        </div>
        <footer className="border-t px-6 py-4 text-center text-xs text-muted-foreground">
            <p className="mb-2 max-w-3xl mx-auto">
                {t('footerDisclaimer')}
            </p>
            <p>{t('footerCopyright')}</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
