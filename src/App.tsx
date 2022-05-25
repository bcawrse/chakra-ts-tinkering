/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
  Select,
  Button,
  extendTheme,
} from "@chakra-ui/react"
import { customTheme } from './chakra-ui';
import { ColorModeSwitcher } from "./ColorModeSwitcher"

// const theme = extendTheme({
//   components: {
//     Button: {
//       // 1. We can update the base styles
//       baseStyle: {
//         fontWeight: 'light', // Normally, it is "semibold"
//       },
//     }
//   }
// });

// import { Logo } from "./Logo"
export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          {/* <Logo h="40vmin" pointerEvents="none" /> */}
          <Select maxW="container.sm">
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
          <Button>Test a button</Button>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
