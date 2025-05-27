import type { MantineColorsTuple, MantineThemeColors } from '@mantine/core';
import { colorsTuple } from '@mantine/core';

export const primary: MantineColorsTuple = [
  '#fff0e4',
  '#ffe0cf',
  '#fac0a1',
  '#f69e6e',
  '#f28043',
  '#f06e27',
  '#f06418',
  '#d6530c',
  '#bf4906',
  '#a73c00',
];
export const secondary: MantineColorsTuple = [
  '#effde7',
  '#e1f8d4',
  '#c3efab',
  '#a2e67e',
  '#87de58',
  '#75d93f',
  '#6bd731',
  '#59be23',
  '#4da91b',
  '#3d920d',
];
// export const accent: MantineColorsTuple = [];

export const colors: Partial<MantineThemeColors> = {
  primary,
  secondary,
  lightBlack: colorsTuple('#242424'),
};
