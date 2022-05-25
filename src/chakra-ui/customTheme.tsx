import { extendTheme } from '@chakra-ui/react';
import { button, select } from './components';

const customThemeObj = {
  components: {
    Select: select,
    Button: button, 
  },
}

export const customTheme = extendTheme(customThemeObj)