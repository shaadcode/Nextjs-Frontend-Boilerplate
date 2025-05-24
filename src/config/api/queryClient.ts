import { QueryClient } from '@tanstack/react-query';
import { apiConfig } from './index';

export const rootQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: apiConfig.retry.maxCount,
      retryDelay: attemptIndex => Math.min(apiConfig.retry.delay * 2 ** attemptIndex, 30000),
    },
  },
});
