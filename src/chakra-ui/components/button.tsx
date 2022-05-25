import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const button: ComponentStyleConfig = {
  baseStyle: (props) => ({
    fontWeight: mode('bold', 'light')(props),
    bg: 'purple',
  }),
  // variants: {
  //   personal:(props) => ({
  //     // fontWeight: 'bold',
  //     bg: mode('purple', 'green')(props),
  //   })
  // },
  // defaultProps: {
  //   variant: 'personal'
  // }
}
