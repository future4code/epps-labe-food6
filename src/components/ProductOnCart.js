import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductOnCart = ({ name, description, price, photoUrl, quantity }) => {
  console.log(quantity);
  return (
    <Flex
      as="article"
      border="1px solid"
      borderColor="neutralPalette.400"
      borderRadius="8px"
      mx="1em"
      my="0.5em"
      h="7em"
    >
      <Flex w="30%" h="7em">
        <Image
          w="100%"
          src={photoUrl}
          objectFit="cover"
          alt={description}
          borderRadius="8px 0 0 8px"
        />
      </Flex>
      <Flex
        color="neutralPalette.500"
        flexDirection="column"
        px="1em"
        paddingTop="0.5em"
        grow="1"
        justify="space-evenly"
      >
        <Text color="greenPalette.400">{name}</Text>
        <Text fontSize="sm" flexWrap="wrap">
          {description}
        </Text>
        <Text color="black">
          {quantity} x <strong>R$ {price}</strong>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProductOnCart;
