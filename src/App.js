import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Router from "./routing/Router";
import React from "react";
import futureEatsTheme from "./futureEatsTheme";

function App() {
  return (
    <ChakraProvider theme={futureEatsTheme}>
      <CSSReset />
      <Router />
    </ChakraProvider>
  );
}

export default App;
