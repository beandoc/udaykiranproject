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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Heart className="w-6 h-6 fill-current" />
                </div>
                 <div className="group-data-[collapsible=icon]:hidden">
                  <h1 className="text-lg font-headline font-bold text-foreground">Kidney Transplant Hub</h1>
                  <p className="text-xs text-muted-foreground">Your journey companion</p>
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
                        <span>{item.label}</span>
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
                            <span>{item.label}</span>
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
                      <span className="sr-only">Select language</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
                  <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
                <Moon className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary/20">JD</AvatarFallback>
            </Avatar>
        </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
