'use client';
import type { CSSVariablesResolver } from '@mantine/core';
import {
  createTheme,
  DEFAULT_THEME,
} from '@mantine/core';

import { montserrat } from '@/config/font';
import { colors } from '@/config/mantine/colors';
import { components } from '@/config/mantine/components';
import { breakpoints, fontSizes, headingSizes, radius, shadows, spacing } from './sizes';

export const theme = createTheme({
  components,
  fontFamily: montserrat.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${montserrat.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  breakpoints,
  fontSizes,
  primaryColor: 'primary',
  colors,
  spacing,
  shadows,
  radius,
  black: '#242424',
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    ...headingSizes,
  },
  light: {},
  dark: {},
});
