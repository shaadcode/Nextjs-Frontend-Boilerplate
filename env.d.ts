declare namespace NodeJS {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    ANALYZE: 'true' | 'false';
    CI: boolean;
    PORT: number;
    NEXT_PUBLIC_BASE_API_URL: string;

    SKIP_ENV_VALIDATION: 'true' | 'false' | undefined;
  }
}
