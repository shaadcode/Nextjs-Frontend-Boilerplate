import type { ReactNode } from 'react';
import ClientProviders from './client.providers';
import ServerProviders from './server.providers';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ServerProviders>
      <ClientProviders>
        {children}
      </ClientProviders>
    </ServerProviders>
  );
};

export default Providers;
