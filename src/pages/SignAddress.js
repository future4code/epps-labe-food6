import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Address = (props) => {
  return (
    <Flex w="100vh" h="100vw" direction="column">
      <Header />
      {props.children}
    </Flex>
  );
};

export default Address;
