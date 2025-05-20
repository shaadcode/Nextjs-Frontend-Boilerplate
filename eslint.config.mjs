import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';

const ignoreFiles = [
  './README.md',
  'migrations/**/*',
  '!.storybook',
];
export default antfu(
  {
    react: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: ignoreFiles,

  },
  // --- Next.js Specific Rules ---
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Storybook Rules ---
  ...storybook.configs['flat/recommended'],
  {
    // 👇 This should match the `stories` property in .storybook/main.js|ts
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      // 👇 Enable this rule
      'storybook/csf-component': 'error',
      // 👇 Disable this rule
      'storybook/default-exports': 'off',
    },
  },
  // --- Testing Rules ---
  {
    files: ['**/*.test.ts?(x)'],
    ...testingLibrary.configs['flat/react'],
    ...jestDom.configs['flat/recommended'],
  },
  // --- E2E Testing Rules ---
  {
    files: ['**/*.spec.ts', '**/*.e2e.ts'],
    ...playwright.configs['flat/recommended'],
  },
  // --- Custom Rule Overrides ---
  {
    rules: {
      'no-restricted-imports': ['error', {
        paths: [
          {
            name: 'next/image',
            importNames: ['default', 'Image'],
            message: 'Using next/image is prohibited. Use @mantine/core.',
          },
          {
            name: 'next/link',
            importNames: ['default', 'Link'],
            message: 'The use of next-intl links is prohibited. Use the `Anchor` component from @mantine/core.',
          },
          {
            name: '@/config/i18n/navigation',
            importNames: ['default', 'Link'],
            message: 'The use of next-intl links is prohibited. Use the `Anchor` component from @mantine/core.',
          },
        ],
      }],
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
    },

  },
);
