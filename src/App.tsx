import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Theme } from "./theme/theme";
import { Router } from "./router/router";
export const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};
