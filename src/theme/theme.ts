import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800'
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400'),
      },
    }
  }
});