import type messages from '@/config/i18n/messages/en.json';
import type formats from '@/config/i18n/request';
import type routing from '@/config/i18n/routing';

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  export interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  };
}
