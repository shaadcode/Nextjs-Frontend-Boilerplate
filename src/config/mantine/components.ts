/* eslint-disable no-restricted-imports */

import type { ContainerProps, MantineTheme, MantineThemeComponents } from '@mantine/core';
import type { MantineCustomContainerSizes } from 'globals';
import { rem } from '@mantine/core';
import NextImage from 'next/image';
import { Link as NextIntlLink } from '@/config/i18n/navigation';
import { containerSizes } from '@/config/mantine/sizes';

const isCustomContainerSize = (
  size: unknown,
): size is MantineCustomContainerSizes =>
  typeof size === 'string' && size in containerSizes;
export const components: MantineThemeComponents = {
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
          : size !== undefined && isCustomContainerSize(size)
            ? containerSizes[size]
            : rem(size),
      },
    }),
  },
  Image: {
    defaultProps: {
      component: NextImage,
      width: rem(250),
      height: rem(250),
      w: '100%',
      h: '100%',
    },
  },
  TableScrollContainer: {
    defaultProps: {
      minWidth: 320,
    },
  },
};
