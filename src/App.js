import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routing/Router";
import React from "react";

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
