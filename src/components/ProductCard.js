import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import testImage from "../images/arepas_venezuelanas.jpg";

const ProductCard = () => {
  return (
    <Flex
      as="article"
      mx="1em"
      my="0.5em"
      border="1px solid"
      borderColor="neutralPalette.500"
      borderRadius="8px"
      p="0"
    >
      <Image
        h="100%"
        w="35%"
        paddingRight="1em"
        src={testImage}
        alt="Arepa bem gostosa"
        objectFit="contain"
        borderRadius="8px 8px 0 0"
      />
      <Flex
        color="neutralPalette.500"
        flexDirection="column"
        justify="space-between"
      >
        <Text color="greenPalette.400" paddingTop="1em">
          Arepa
        </Text>
        <Text fontSize="sm" lineHeight="12px">
          Farinha de milho com recheios diversos
        </Text>
        <Flex justify="space-between">
          <Text color="black">R$ 20,00</Text>
          <Button
            colorScheme="greenPalette.400"
            size="sm"
            m="0"
            borderRadius="8px 0 8px 0"
            variant="outline"
            alignSelf="flex-end"
            justifySelf="flex-end"
          >
            adicionar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
