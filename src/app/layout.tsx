import "@/styles/globals.css";
import { Inter as FontSans } from "@next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/providers/toast-provider";

import NextTopLoader from "nextjs-toploader";
import SupabaseProvider from "@/components/providers/supabase-provider";

export const metadata = {
  title: "Qual vai ser",
  description: "Site para votaçōes rápidas",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased text-neutral-900 bg-gradient-to-tl dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 dark:text-neutral-50",
          fontSans.variable
        )}
      >
        <SupabaseProvider>
          <ThemeProvider>
            <ToastProvider>
              <NextTopLoader showSpinner={false} />
              {children}
            </ToastProvider>
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
