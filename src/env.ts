// env.ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({

  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.coerce.number().optional(),
    ANALYZE: z.enum(['true', 'false']).optional(),
    CI: z.enum(['true', 'false']).optional(),
    USE_I18N_LOCALE_PREFIX: z.enum(['true', 'false']),
  },
  client: {
    NEXT_PUBLIC_BASE_API_URL: z.string().url(),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    USE_I18N_LOCALE_PREFIX: process.env.USE_I18N_LOCALE_PREFIX,
    ANALYZE: process.env.ANALYZE,
    CI: process.env.CI,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
});
