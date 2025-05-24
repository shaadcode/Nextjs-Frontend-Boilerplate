'use client';
import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { rootQueryClient } from '@/config/api/queryClient';

const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={rootQueryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
export default ClientProviders;
