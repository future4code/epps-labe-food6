import { Flex, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";

import { CgProfile, CgShoppingCart, CgHomeAlt } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/authContext";

import { goToFeed, goToCart, goToProfile } from "../routing/Coordinator";

const Footer = () => {
  const history = useHistory();
  const { authStates } = useContext(AuthContext);

  const userId = authStates.user.id;

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
      borderY="1px solid"
      borderColor="neutralPalette.400"
    >
      <Flex
        as="nav"
        w="100%"
        h="100%"
        align="center"
        justify="space-around"
        color="neutralPalette.400"
      >
        <IconButton
          icon={<CgHomeAlt />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="36px"
          variant="ghost"
          onClick={() => goToFeed(history)}
        />
        <IconButton
          icon={<CgShoppingCart />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="36px"
          variant="ghost"
          onClick={() => goToCart(history, userId)}
        />
        <IconButton
          icon={<CgProfile />}
          h="100%"
          w="100%"
          size="lg"
          fontSize="36px"
          variant="ghost"
          onClick={() => goToProfile(history, userId)}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
