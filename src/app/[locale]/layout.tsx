import type { Metadata } from 'next';

import { mantineHtmlProps } from '@mantine/core';

import { GoogleAnalytics } from '@next/third-parties/google';
import { hasLocale } from 'next-intl';

import { notFound } from 'next/navigation';
import { montserrat } from '@/config/font';
import routing from '@/config/i18n/routing';

import Providers from '@/Providers';

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
        <Providers>{children}</Providers>
      </body>

      {/* google analytics config */}
      <GoogleAnalytics gaId="G-XYZ" />

    </html>
  );
}
