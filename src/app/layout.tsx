import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Qual vai ser",
  description: "Site para votaçōes rápidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ThemeProvider>
          <div className='flex min-h-screen flex-col'>
            {/* <Header /> */}
            <div className='container flex-1'>{children}</div>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
