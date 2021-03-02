import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Cart = () => {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Header>Cart</Header>
      <Flex as="section" h="100%" w="100%">
        cart page
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Cart;
