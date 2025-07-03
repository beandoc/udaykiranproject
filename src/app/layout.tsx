import type { Metadata } from 'next';
import { AppShell } from '@/components/layout/app-shell';
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from '@/context/app-context';
import { ThemeProvider } from "next-themes";
import './globals.css';

export const metadata: Metadata = {
  title: 'UdayKiran: Your Transplant Companion',
  description: 'Your personalized hub for kidney transplant education and support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
              <AppShell>{children}</AppShell>
              <Toaster />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
