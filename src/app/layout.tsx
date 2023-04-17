import "@/styles/globals.css";
import { Inter as FontSans } from "@next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@/components/toast-provider";

import NextTopLoader from "nextjs-toploader";

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
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased text-neutral-900 bg-gradient-to-tl dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 dark:text-neutral-50",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <ToastProvider>
            <NextTopLoader showSpinner={false} />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
