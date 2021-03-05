import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../contexts/cartContext";
import { TimeIcon } from "@chakra-ui/icons";

const OrderStatus = () => {
  const { cartStates } = useContext(CartContext);

  return (
    <Flex
      bgColor="greenPalette.300"
      h="80px"
      w="100%"
      align="center"
      p="4"
      position="fixed"
      bottom="80px"
      zIndex="5"
    >
      <TimeIcon color="white" marginX="4" fontSize="32px" />
      <Box paddingX="4">
        <Text color="white">Pedido em andamento</Text>
        <Text>{cartStates.restaurantName && cartStates.restaurantName}</Text>
        <Text fontWeight="500">
          {cartStates.totalPrice && cartStates.totalPrice}
        </Text>
      </Box>
    </Flex>
  );
};

export default OrderStatus;
