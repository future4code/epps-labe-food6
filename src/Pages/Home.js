import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Flex
        as="article"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        bgColor="neutralPalette.900"
      >
        <Box as="span">
          <Text
            fontSize="56px"
            fontWeight="400"
            lineHeight="0.9"
            alignSelf="flex-end"
            color="neutralPalette.100"
          >
            Future
          </Text>
          <Text
            fontSize="56px"
            fontWeight="700"
            lineHeight="0.9"
            alignSelf="flex-end"
            color="greenPalette.400"
          >
            Eats
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
