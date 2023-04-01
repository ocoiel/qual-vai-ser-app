import "@/styles/globals.css";
import { Inter as FontSans } from "@next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { cn } from "@/libs/utils";

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
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <div className='container flex-1'>{children}</div>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
