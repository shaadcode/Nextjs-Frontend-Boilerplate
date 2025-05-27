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
  '#fff4e1',
  '#ffe8cc',
  '#fed09b',
  '#fdb766',
  '#fca13a',
  '#fc931d',
  '#fc8a08',
  '#e17800',
  '#c86a00',
  '#af5a00',
];
// export const accent: MantineColorsTuple = [];

export const colors: Partial<MantineThemeColors> = {
  primary,
  secondary,
  lightBlack: colorsTuple('#242424'),
};
