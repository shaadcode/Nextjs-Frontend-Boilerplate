import type { ReactNode } from 'react';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { cssVariablesResolver, theme } from '@/config/mantine/mantine';

const ServerProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
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
    </>
  );
};
export default ServerProviders;
