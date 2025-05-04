import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',
});
export default routing;
