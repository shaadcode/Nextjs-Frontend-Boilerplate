/* eslint-disable ts/consistent-type-definitions */
import type { DefaultMantineColor, MantineThemeColors as DefaultMantineThemeColors, AnchorProps as MantineAnchorProps, ImageProps as MantineImageProps, StyleProp } from '@mantine/core';

import type { ImageProps as NextImageProps } from 'next/image';
import type messages from '@/config/i18n/messages/en.json';
import type { LinkProps as NextIntlLinkProps } from '@/config/i18n/navigation';
import type formats from '@/config/i18n/request';
import type routing from '@/config/i18n/routing';

import '@mantine/core';

export type MantineCustomContainerSizes = 'xs' |
  'sm' |
  'md' |
  'lg' |
  'xl' |
  '2xl' |
  '3xl' |
  '4xl';

export type MantineCustomBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | (string & {});

export type MantineCustomFontSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | (string & {});

export type MantineCustomSpacing = | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';
export type MantineCustomShadows =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | 'inset';

export type MantineCustomRadius =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl' | 'full'
  | (string & {});

export type MantineCustomLineHeight =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | (string & {});

export type MantineCustomThemeColors = 'primary' | 'secondary' | DefaultMantineThemeColors;
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

  export interface AnchorProps extends MantineAnchorProps, NextIntlLinkProps {}

  export interface ContainerProps {
    size?: MantineCustomContainerSizes | (string & {}) | number;

  };

  export interface TextProps {
    fz?: StyleProp<MantineCustomFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  }

  export interface TitleProps {
    fz?: StyleProp<MantineCustomFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  }

  export type MantineBreakpointsValues = Record<MantineCustomBreakpoint, string>;
  export type MantineFontSizesValues = Record<MantineCustomFontSize, string>;
  export type MantineSpacing = MantineCustomSpacing;
  export type MantineSpacingValues = Record<MantineSpacing, string>;

  export type MantineShadow = MantineCustomShadows | (string & {}) | number;
  export type MantineShadowsValues = Record<MantineShadows, string>;

  export type MantineRadius = MantineCustomRadius | (string & {}) | number;
  export type MantineRadiusValues = Record<MantineCustomRadius, string>;

  export type MantineLineHeight = MantineCustomLineHeight | (string & {}) | number;
  export type MantineLineHeightValues = Record<MantineCustomLineHeight, string>;

  export type MantineThemeColors = MantineCustomThemeColors | DefaultMantineColor;

}
