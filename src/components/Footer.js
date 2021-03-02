import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";

import { CgProfile, CgShoppingCart, CgHomeAlt } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import { goToFeed, goToCart, goToProfile } from "../routing/Coordinator";

const Footer = () => {
  const history = useHistory();

  const id = 2;

  return (
    <Flex
      as="footer"
      w="100vw"
      h="10vh"
      direction="column"
      align="center"
      position="fixed"
      bottom="0"
      bgColor="neutralPalette.100"
    >
      <Flex as="nav" w="100%" h="100%" align="center" justify="space-around">
        <IconButton
          icon={<CgHomeAlt />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="26px"
          variant="ghost"
          onClick={() => goToFeed(history)}
        />
        <IconButton
          icon={<CgShoppingCart />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="26px"
          variant="ghost"
          onClick={() => goToCart(history, id)}
        />
        <IconButton
          icon={<CgProfile />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="26px"
          variant="ghost"
          onClick={() => goToProfile(history, id)}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
