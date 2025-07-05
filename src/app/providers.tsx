"use client";

import { ThemeProvider } from "next-themes";
import {NextIntlClientProvider} from 'next-intl';
import { Locale } from "@/i18n/config";

export function Providers({ children, locale }: { children: React.ReactNode, locale: Locale }) {
  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
