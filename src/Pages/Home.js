import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Flex as="article" w="100%" h="100%" align="center" justify="center">
        <Heading as="h1">hello world!</Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
