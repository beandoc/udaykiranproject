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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BookOpen,
  Globe,
  HeartPulse,
  LayoutDashboard,
  Library,
  Pill,
} from 'lucide-react';
import { Button } from '../ui/button';

function KidneyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.37 14.5c-3.5-1-4.25-5.5-2.06-8.27.86-1.08 2.33-1.68 3.8-1.5 2.1.25 4.12 2.1 4.5 4.3.4 2.25-1.12 4.2-2.78 5.4-1.68 1.22-3.8 1.88-5.46 1.88-1.33 0-2.22-.42-2.22-.42" />
            <path d="M10.31 16.27c-1.34.4-2.82.73-4.14.73-2.39 0-4-1.22-4-3.5C2.17 10.9 4.5 8.5 7.5 8.5c1.45 0 2.5.58 3.53 1.25" />
            <path d="M13.47 14.55c.62.83 1.72 1.95 3.32 2.25 2.53.48 4.2-1.22 4.2-3.3 0-1.92-1.3-4.3-3.8-5.3-1.25-.5-2.67-.7-4.02-.45" />
        </svg>
    )
}

const mainNav = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/modules', label: 'Educational Modules', icon: BookOpen },
  { href: '/resources', label: 'Resource Library', icon: Library },
];

const toolsNav = [
  { href: '/tools/medication', label: 'Medication Tracker', icon: Pill },
  { href: '/tools/symptoms', label: 'Symptom Log', icon: HeartPulse },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
            <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <KidneyIcon className="w-5 h-5" />
                </div>
                <h1 className="text-xl font-headline font-bold text-foreground">Kidney Transplant Education Hub</h1>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainNav.map((item) => (
                    <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                        <item.icon />
                        {item.label}
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
            <SidebarGroup className="mt-4">
                <SidebarGroupLabel>Health Tools</SidebarGroupLabel>
                <SidebarMenu>
                    {toolsNav.map((item) => (
                        <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={pathname === item.href}>
                            <Link href={item.href}>
                            <item.icon />
                            {item.label}
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
              <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
