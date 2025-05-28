/* eslint-disable perfectionist/sort-imports */
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { cssVariablesResolver, theme } from '@/config/mantine/mantine';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

const ServerProviders = ({ children }: { children: ReactNode }) => {
  return (
    <DirectionProvider>
      <MantineProvider
        defaultColorScheme="auto"
        cssVariablesResolver={cssVariablesResolver}
        theme={theme}
      >
        <Notifications containerWidth={360} position="top-right" />

        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </MantineProvider>
    </DirectionProvider>
  );
};
export default ServerProviders;
