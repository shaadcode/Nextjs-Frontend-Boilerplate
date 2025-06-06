import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-styling-webpack',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  staticDirs: [
    '..\\public',
  ],
  framework: '@storybook/nextjs',
};
export default config;
