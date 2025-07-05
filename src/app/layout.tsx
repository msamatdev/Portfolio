import "./globals.css";
import { Providers } from "./providers";
import Navbar from './../components/navbar/Navbar';
import { Metadata } from "next";
import Footer from '@/components/footer/Footer';
import { Analytics } from "@vercel/analytics/react";
import {getLocale} from 'next-intl/server';
import { Locale } from "@/i18n/config";
import BottomBar from "@/components/bottom_bar/BottomBar";

export const metadata: Metadata = {
  title: {
    default: "Portfolio • Mathis SAMAT",
    template: "%s • Mathis SAMAT"
  },
  description: "Browse the portfolio of Mathis SAMAT, a french student who is looking for a 2 years apprenticeship near Paris."
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className="h-full colorsThemeTransition scroll-smooth">
      <Analytics />
      <body className="relative h-full font-sans antialiased">
        <Providers locale={locale as Locale}>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
            <BottomBar />
          </main>
        </Providers>
      </body>
    </html>
  );
}
