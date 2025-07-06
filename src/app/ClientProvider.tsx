'use client';

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { Locale } from '@/i18n/config';

type Props = {
  children: React.ReactNode;
  locale: Locale;
  messages: Record<string, any>;
};

export function ClientProviders({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone='Europe/Paris' >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
