export default {
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix --no-warn-ignored'],
  '**/*.ts?(x)': () => 'pnpm check-types',
};
