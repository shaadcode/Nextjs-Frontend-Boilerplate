import { defineRouting } from 'next-intl/routing';

const useLocalePrefix = process.env.USE_I18N_LOCALE_PREFIX === 'true';

const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fa'],

  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: useLocalePrefix ? 'always' : 'never',
  localeCookie: {
    name: 'lang',
    maxAge: 60 * 60 * 24 * 365,
  },
});
export default routing;
