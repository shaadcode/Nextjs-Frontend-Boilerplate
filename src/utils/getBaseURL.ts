import { env } from '@/env';

export const getBaseUrl = () => {
  if (env.NEXT_PUBLIC_APP_URL) {
    return env.NEXT_PUBLIC_APP_URL;
  }

  return 'http://localhost:3000';
};
