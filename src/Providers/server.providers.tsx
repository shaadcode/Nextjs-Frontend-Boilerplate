/* eslint-disable perfectionist/sort-imports */
import '@mantine/core/styles.css';

import { cssVariablesResolver, theme } from '@/config/mantine/mantine';
import { DirectionProvider, MantineProvider } from '@mantine/core';
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
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </MantineProvider>
    </DirectionProvider>
  );
};
export default ServerProviders;
