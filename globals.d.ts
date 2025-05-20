/* eslint-disable ts/consistent-type-definitions */
import type { ImageProps as MantineImageProps } from '@mantine/core';
import type { ImageProps as NextImageProps } from 'next/image';
import type messages from '@/config/i18n/messages/en.json';
import type formats from '@/config/i18n/request';
import type routing from '@/config/i18n/routing';

declare module 'next-intl' {
  export interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  };
}

declare module 'axios'{
  export interface AxiosRequestConfig {
    /**
     * Managing retry in axios
     */
    retry?: {
      /**
       * Number of retries
       */
      maxCount?: number;
      /**
       * This value should always be zero
       */
      storeCount?: 0;
      /**
       * Delay time
       */
      delay?: number;
      /**
       * Enable or disable retry feature for axios
       */
      enabled?: boolean;
    };
  };
}

declare module '@mantine/core' {
  export interface ImageProps extends NextImageProps, MantineImageProps {}
}
