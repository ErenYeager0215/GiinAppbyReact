import React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "./theme/theme"
import {Router} from "./router/Router"

export default function App() {
  return (
   
    <ChakraProvider theme={theme}>
       <RouterProvider router={Router} />
  <Button colorScheme='blue'>Button</Button>
  <p>aaaaa</p>
    </ChakraProvider>
  );
}