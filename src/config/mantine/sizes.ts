import type { MantineCustomBreakpoint, MantineCustomContainerSizes, MantineCustomFontSize, MantineCustomLineHeight, MantineCustomRadius, MantineCustomShadows, MantineCustomSpacing } from 'globals';
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
  '5xl': rem(48),
  '6xl': rem(60),
  '7xl': rem(72),
  '8xl': rem(96),
  '9xl': rem(128),
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
  'xs': rem(2),
  'sm': rem(4),
  'md': rem(6),
  'lg': rem(8),
  'xl': rem(12),
  '2xl': rem(16),
  '3xl': rem(24),
  '4xl': rem(32),
  'full': rem(9999),
};

export const lineHeights: Record<MantineCustomLineHeight, string> = {
  'xs': '1.2',
  'sm': '1.3',
  'md': '1.4',
  'lg': '1.5',
  'xl': '1.6',
  '2xl': '1.7',
  '3xl': '1.8',
  '4xl': '2',
  '5xl': '2.2',
  '6xl': '2.4',
  '7xl': '2.6',
  '8xl': '2.8',
  '9xl': '3',
};
