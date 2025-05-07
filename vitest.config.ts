import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',

  },
});
