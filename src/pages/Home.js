import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

import { goToFeed, goToLogin, goToSignUp } from "../routing/Coordinator";

const Home = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (token) {
    goToFeed(history);
  }
  return (
    <Flex
      as="main"
      w="100vw"
      h="100vh"
      direction="column"
      align="center"
      justify="space-between"
      bgColor="neutralPalette.900"
    >
      <Flex
        as="section"
        w="100%"
        h="80%"
        direction="column"
        align="center"
        justify="center"
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
      <Flex
        as="footer"
        h="20%"
        w="100%"
        padding="4"
        align="center"
        justify="space-around"
      >
        <Button onClick={() => goToLogin(history)}>Login</Button>
        <Button onClick={() => goToSignUp(history)}>Cadastrar</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
