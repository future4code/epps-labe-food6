import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import testeImg from "../images/arepas_venezuelanas.jpg";

const ProductOnCart = () => {
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
          src={testeImg}
          objectFit="cover"
          alt="Arepa"
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
        <Text color="greenPalette.400">Produto</Text>
        <Text fontSize="sm" flexWrap="wrap">
          Descrição
        </Text>
        <Text color="black">
          <strong>R$ preço</strong>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProductOnCart;
