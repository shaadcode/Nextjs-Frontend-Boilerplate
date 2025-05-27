import type { MantineCustomBreakpoint, MantineCustomContainerSizes, MantineCustomFontSize, MantineCustomRadius, MantineCustomShadows, MantineCustomSpacing } from 'globals';
import { rem } from '@mantine/core';

export const containerSizes: Record<MantineCustomContainerSizes, string> = {
  'xs': rem(320),
  'sm': rem(375),
  'md': rem(425),
  'lg': rem(768),
  'xl': rem(1024),
  '2xl': rem(1440),
  '3xl': rem(1920),
  '4xl': rem(2560),
};

export const headingSizes: Record<`--mantine-h${1 | 2 | 3 | 4 | 5 | 6}-font-size`, string> = {
  '--mantine-h1-font-size': rem(47.776),
  '--mantine-h2-font-size': rem(39.808),
  '--mantine-h3-font-size': rem(33.184),
  '--mantine-h4-font-size': rem(27.648),
  '--mantine-h5-font-size': rem(23.04),
  '--mantine-h6-font-size': rem(19.2),
};

export const breakpoints: Record<MantineCustomBreakpoint, string> = {
  'xs': rem(320),
  'sm': rem(375),
  'md': rem(425),
  'lg': rem(768),
  'xl': rem(1024),
  '2xl': rem(1440),
  '3xl': rem(1920),
  '4xl': rem(2560),
};

export const fontSizes: Record<MantineCustomFontSize, string> = {
  'xs': rem(8),
  'sm': rem(12),
  'md': rem(16),
  'lg': rem(20),
  'xl': rem(24),
  '2xl': rem(28),
  '3xl': rem(32),
  '4xl': rem(36),
};

export const spacing: Record<MantineCustomSpacing, string> = {
  '2xs': rem(4),
  'xs': rem(8),
  'sm': rem(12),
  'md': rem(16),
  'lg': rem(24),
  'xl': rem(32),
  '2xl': rem(48),
  '3xl': rem(64),
  '4xl': rem(96),
  '5xl': rem(128),
};

export const shadows: Record<MantineCustomShadows, string> = {
  '2xs': '0 0.5px 1px rgba(0, 0, 0, 0.05)',
  'xs': '0 1px 2px rgba(0, 0, 0, 0.07)',
  'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
  'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
  'lg': '0 4px 8px rgba(0, 0, 0, 0.12)',
  'xl': '0 8px 16px rgba(0, 0, 0, 0.12)',
  '2xl': '0 12px 24px rgba(0, 0, 0, 0.14)',
  '3xl': '0 16px 32px rgba(0, 0, 0, 0.15)',
  '4xl': '0 24px 48px rgba(0, 0, 0, 0.18)',
  'inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
};

export const radius: Record<MantineCustomRadius, string> = {
  '2xs': rem(2),
  'xs': rem(4),
  'sm': rem(8),
  'md': rem(16),
  'lg': rem(32),
  'xl': rem(48),
  'full': rem(9999),
};
