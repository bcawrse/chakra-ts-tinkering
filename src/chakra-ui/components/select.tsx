import { ComponentMultiStyleConfig } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';

export const select: ComponentMultiStyleConfig = {
  parts: ['field'],
  baseStyle: {
    field: {
      bg: 'purple',
    },
  },
  // variants: {
  //   outline: {
  //     field: {
  //       bg: 'green',
  //     }
  //   }
  // }
}