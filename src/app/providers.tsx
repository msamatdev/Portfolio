import { getMessages } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { ClientProviders } from './ClientProvider';

export async function Providers({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const messages = await getMessages({ locale });

  return (
    <ClientProviders locale={locale} messages={messages}>
      {children}
    </ClientProviders>
  );
}