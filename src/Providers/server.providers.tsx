import type { ReactNode } from 'react';
import { cssVariablesResolver, theme } from '@/config/mantine';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';

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
