import { Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { goBackTo, goHome } from "../routing/Coordinator";
import { useHistory, useParams } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const params = useParams();
  
  // const path = (pathParams) => {
  //   pathParams = params;
  //   console.log(pathParams);
  //   let pathUrl = pathParams;
  //   if (
  //     pathParams === "restaurants" ||
  //     pathParams === "profile" ||
  //     pathParams === "cart"
  //   ) {
  //     pathUrl = pathParams;
  //   }

  //   console.log(pathUrl);
  //   return pathUrl;
  // };

   // TO DO: BUTTONS ON EACH PAGE
  return (
    <Flex
      as="header"
      w="100vw"
      align="center"
      justify="space-between"
      borderBottom="1px lightgray solid"
      minH="50px"
    >
      { params && (!params.restaurantId && !params.userId) ? (
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
          />
          <Text w="90%" textAlign="center" fontSize="22px">
            {props.children}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default Header;
