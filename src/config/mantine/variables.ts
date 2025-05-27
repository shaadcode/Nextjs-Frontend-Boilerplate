import type { MantineCustomContainerSizes, MantineCustomRadius } from 'globals';
import { rem } from '@mantine/core';
import { secondary } from './colors';

export const headingSizesCSSVariables: Record<`--mantine-h${1 | 2 | 3 | 4 | 5 | 6}-font-size`, string> = {
  '--mantine-h1-font-size': rem(47.776),
  '--mantine-h2-font-size': rem(39.808),
  '--mantine-h3-font-size': rem(33.184),
  '--mantine-h4-font-size': rem(27.648),
  '--mantine-h5-font-size': rem(23.04),
  '--mantine-h6-font-size': rem(19.2),
};

export const secondaryColorVariables: Record<`--mantine-secondary-color-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`, string> = {
  '--mantine-secondary-color-0': secondary[0],
  '--mantine-secondary-color-1': secondary[1],
  '--mantine-secondary-color-2': secondary[2],
  '--mantine-secondary-color-3': secondary[3],
  '--mantine-secondary-color-4': secondary[4],
  '--mantine-secondary-color-5': secondary[5],
  '--mantine-secondary-color-6': secondary[6],
  '--mantine-secondary-color-7': secondary[7],
  '--mantine-secondary-color-8': secondary[8],
  '--mantine-secondary-color-9': secondary[9],
};

export const containerSizesVariables: Record<`--mantine-container-${MantineCustomContainerSizes}`, string> = {
  '--mantine-container-xs': rem(320),
  '--mantine-container-sm': rem(375),
  '--mantine-container-md': rem(425),
  '--mantine-container-lg': rem(768),
  '--mantine-container-xl': rem(1024),
  '--mantine-container-2xl': rem(1440),
  '--mantine-container-3xl': rem(1920),
  '--mantine-container-4xl': rem(2560),
};

export const radiusVariables: Record<`--mantine-radius-${MantineCustomRadius}`, string> = {
  '--mantine-radius-xs': rem(2),
  '--mantine-radius-sm': rem(4),
  '--mantine-radius-md': rem(6),
  '--mantine-radius-lg': rem(8),
  '--mantine-radius-xl': rem(12),
  '--mantine-radius-2xl': rem(16),
  '--mantine-radius-3xl': rem(24),
  '--mantine-radius-4xl': rem(32),
  '--mantine-radius-full': rem(9999),
};
