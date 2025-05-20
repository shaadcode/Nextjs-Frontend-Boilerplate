'use client';
import type { ContainerProps, CSSVariablesResolver, MantineTheme } from '@mantine/core';
import {
  colorsTuple,

  createTheme,

  DEFAULT_THEME,
  rem,
} from '@mantine/core';
import NextImage from 'next/image';
import { montserrat } from '@/config/font';

import { Link as NextIntlLink } from '@/config/i18n/navigation';

// export const primary: MantineColorsTuple = colorsTuple('#fff');
// export const secondary: MantineColorsTuple = colorsTuple('#fff');
// export const accent: MantineColorsTuple = colorsTuple('#fff');

const CONTAINER_SIZES: Record<string, string> = {
  'xs': '320px',
  'sm': '375px',
  'md': '425px',
  'lg': '768px',
  'xl': '1024px',
  '2xl': '1440px',
  '3xl': '2560px',
};

export const theme = createTheme({
  components: {
    NavLink: {
      defaultProps: {
        component: NextIntlLink,
      },
    },
    Anchor: {
      defaultProps: {
        component: NextIntlLink,
      },
    },
    Container: {
      defaultProps: {
        size: '2xl',
      },
      vars: (_: MantineTheme, { size, fluid }: ContainerProps) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    },
    Image: {
      defaultProps: {
        component: NextImage,
        width: 250,
        height: 250,
        w: '100%',
        h: '100%',
      },
    },
    TableScrollContainer: {
      defaultProps: {
        minWidth: 320,
      },
    },
  },
  fontFamily: montserrat.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${montserrat.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    sizes: {
      h1: {
        fontSize: 'var(--mantine-h1-font-size)',
        fontWeight: '900',
      },
      h2: {
        fontSize: 'var(--mantine-h2-font-size)',

        fontWeight: '800',
      },
      h3: {
        fontSize: 'var(--mantine-h3-font-size)',
        fontWeight: '700',
      },
    },
  },
  breakpoints: {
    'xs': '320px',
    'sm': '375px',
    'md': '425px',
    'lg': '768px',
    'xl': '1024px',
    '2xl': '1440px',
    '3xl': '2560px',
  },
  fontSizes: {
    '2xl': '35px',
    '3xl': '50px',
    '4xl': '65px',
  },
  // primaryColor: 'primary',
  colors: {
    // primary,
    lightBlack: colorsTuple('#242424'),
  },
  black: '#242424',
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-h1-font-size': '40px',
    '--mantine-h2-font-size': '32px',
    '--mantine-h3-font-size': '26px',
  },
  light: {},
  dark: {},
});
