import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Error = () => {
  return (
    <Flex
      as="main"
      w="100vw"
      h="100vh"
      direction="column"
      align="center"
      margin="auto"
    >
      <Header />
      <Box as="span" padding="8" margin="16">
        <Text
          fontSize="48px"
          fontWeight="400"
          lineHeight="0.9"
          alignSelf="flex-end"
        >
          Future
        </Text>
        <Text
          fontSize="48px"
          fontWeight="700"
          lineHeight="0.9"
          alignSelf="flex-end"
          color="greenPalette.400"
        >
          Eats
        </Text>
      </Box>
      <Box as="span" padding="4" direction="column" align="center">
        <Text
          fontSize="40px"
          fontWeight="200"
          lineHeight="0.9"
          alignSelf="flex-end"
        >
          Página não encontrada
        </Text>
      </Box>
    </Flex>
  );
};

export default Error;
