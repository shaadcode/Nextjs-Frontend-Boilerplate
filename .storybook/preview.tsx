import {
  MantineProvider,
  useMantineColorScheme,
} from '@mantine/core';
import { addons } from '@storybook/preview-api';

import { NextIntlClientProvider } from 'next-intl';
import React, { useEffect } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { theme } from './../src/config/mantine';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

const locale = 'en';
const channel = addons.getChannel();

function ColorSchemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

const loadMessages = (locale: string) => {
  switch (locale) {
    case 'fa':
      // eslint-disable-next-line ts/no-require-imports
      return require('@/config/i18n/messages/fa.json');
    case 'en':
    default:
      // eslint-disable-next-line ts/no-require-imports
      return require('@/config/i18n/messages/en.json');
  }
};

const messages = loadMessages(locale);

export const decorators = [
  (story: any) => (
    <ColorSchemeWrapper>
      {story()}
    </ColorSchemeWrapper>
  ),
  (story: any) => (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MantineProvider forceColorScheme="dark" theme={theme}>
        {story()}
      </MantineProvider>
    </NextIntlClientProvider>
  ),
];
