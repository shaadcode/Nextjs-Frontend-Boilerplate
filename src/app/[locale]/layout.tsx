import type { Metadata } from 'next';
import { montserrat } from '@/config/font';

import routing from '@/config/i18n/routing';
import { cssVariablesResolver, theme } from '@/config/mantine';
import { DirectionProvider, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '@mantine/core/styles.css';
import './../globals.css';

export const metadata: Metadata = {
  title: 'Nextjs boilerplate',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} {...mantineHtmlProps}>
      <body className={`${montserrat.className}`}>
        <DirectionProvider>
          <MantineProvider
            defaultColorScheme="auto"
            cssVariablesResolver={cssVariablesResolver}
            theme={theme}
          >
            <NextIntlClientProvider>
              {children}
            </NextIntlClientProvider>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
