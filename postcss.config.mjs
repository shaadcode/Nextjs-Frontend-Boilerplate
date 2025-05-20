/**
 * PostCSS Configuration
 * @type {import('postcss-load-config').Config}
 *
 * This file configures the PostCSS processor which transforms CSS with JavaScript plugins.
 * It's used in the build process to process CSS files before they're served to the browser.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '320px',
        'mantine-breakpoint-sm': '375px',
        'mantine-breakpoint-md': '425px',
        'mantine-breakpoint-lg': '768px',
        'mantine-breakpoint-xl': '1024px',
        'mantine-breakpoint-2xl': '1440px',
        'mantine-breakpoint-3xl': '2560px',
      },
    },
  },
};

export default config;
