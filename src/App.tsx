import React from "react";
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'



export default function App() {
  return (
   
    <ChakraProvider>
  <Button colorScheme='blue'>Button</Button>
  <p>aaaaa</p>
    </ChakraProvider>
  );
}