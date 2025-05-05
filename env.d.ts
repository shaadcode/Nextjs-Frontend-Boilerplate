declare namespace NodeJS {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface ProcessEnv {
    ENV_APP: 'development' | 'production' | 'test';
    ANALYZE: 'true' | 'false';
    CI: boolean;
    PORT: number;
    NEXT_PUBLIC_BASE_API_URL: string;
  }
}
