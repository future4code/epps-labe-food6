import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";

const Header = (props) => {
  return (
    <Flex as="header" w="100vw" align="center" justify="space-between">
      <IconButton
        icon={<ChevronLeftIcon />}
        w="10%"
        variant="ghost"
        color="neutralPalette.900"
        fontSize="32px"
      >
        voltar
      </IconButton>
      <Text w="90%" textAlign="center" fontSize="22px">
        {props.children}
      </Text>
    </Flex>
  );
};

export default Header;
