import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { goHome } from "../routing/Coordinator";
import { useHistory, useParams } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const params = useParams();

  const pathParams = params.page;
  let pathUrl = pathParams;
  if (pathParams.includes("restaurants" || "profile/:userId")) {
    pathUrl = pathParams;
  }

  return (
    <Flex
      as="header"
      w="100vw"
      align="center"
      justify="space-between"
      borderBottom="1px lightgray solid"
      minH="50px"
    >
      {pathUrl && pathUrl ? (
        <Text w="100%" textAlign="center" fontSize="22px">
          {props.children}
        </Text>
      ) : (
        <>
          <IconButton
            icon={<ChevronLeftIcon />}
            w="10%"
            variant="ghost"
            color="neutralPalette.900"
            fontSize="32px"
            onClick={() => goHome(history)}
          >
            voltar
          </IconButton>
          <Text w="90%" textAlign="center" fontSize="22px">
            {props.children}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default Header;
