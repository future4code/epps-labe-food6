import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const OrderHistoryCard = () => {
  return (
    <Flex
      as="article"
      color="neutralPalette.500"
      flexDirection="column"
      justify="space-between"
    >
      <Flex
        border="1px solid"
        flexDirection="column"
        borderColor="neutralPalette.500"
        borderRadius="8px"
        p="0.8em"
      >
        <Text color="greenPalette.400" lineHeight="2em">
          Areperia Las Mercedes
        </Text>
        <Text fontSize="xs" lineHeight="1.5em">
          Data da compra
        </Text>
        <Text color="black" fontWeight="600" lineHeight="2em">
          SUBTOTAL R$ 20,00
        </Text>
      </Flex>
    </Flex>
  );
};

export default OrderHistoryCard;
