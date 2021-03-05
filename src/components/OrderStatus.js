import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../contexts/cartContext";

const OrderStatus = () => {
  const { cartStates } = useContext(CartContext);

  return (
    <Flex>
      <Text>{cartStates.restaurantName}</Text>
      <Text>{cartStates.totalPrice}</Text>
    </Flex>
  );
};

export default OrderStatus;
