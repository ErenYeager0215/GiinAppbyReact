import React from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Router } from "./router/Router";
import { HeaderLayout } from "./components/template/HeaderLayout";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout>
      <RouterProvider router={Router} />
      </HeaderLayout>
    </ChakraProvider>
  );
}
