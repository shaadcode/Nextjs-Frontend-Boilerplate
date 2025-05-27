'use client';
import type { CSSVariablesResolver } from '@mantine/core';
import {
  createTheme,
  DEFAULT_THEME,
} from '@mantine/core';

import { montserrat } from '@/config/font';
import { colors } from './colors';
import { components } from './components';
import { breakpoints, fontSizes, lineHeights, radius, shadows, spacing } from './sizes';
import { containerSizesVariables, headingSizesCSSVariables, radiusVariables, secondaryColorVariables } from './variables';

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
  lineHeights,
  black: '#242424',
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    ...headingSizesCSSVariables,
    ...secondaryColorVariables,
    ...containerSizesVariables,
    ...radiusVariables,
  },
  light: {},
  dark: {},
});
