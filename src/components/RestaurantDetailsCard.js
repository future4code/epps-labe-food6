import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import testImage from "../images/falafal_shawarma.jpg";

const RestaurantCard = () => {
  return (
    <Flex as="article" flexDirection="column" mx="1em">
      <Box grow="1" py="1em">
        <Image
          src={testImage}
          alt="Shawarma de falafel mega gostoso"
          objectFit="contain"
          borderRadius="8px 8px 0 0"
        />
      </Box>
      <Flex color="neutralPalette.500" flexDirection="column">
        <Text color="greenPalette.400">Nome do restaurante</Text>
        <Text>Tipo do restaurante</Text>
        <Flex justify="space-between">
          <Text>50 - 60min</Text>
          <Text>Frete R$ 10,00</Text>
        </Flex>
        <Text>Endereço</Text>
      </Flex>
    </Flex>
  );
};

export default RestaurantCard;
