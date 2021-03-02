import React from "react";
import { Box, Flex, SimpleGrid, Image, Text } from "@chakra-ui/react";
import testImage from "../images/falafal_shawarma.jpg";

const RestaurantCard = () => {
  return (
    <Flex flexDirection="column" mx="1em">
      <Box isFullWidth py="1em">
        <Image
          src={testImage}
          alt="Shawarma de falafel mega gostoso"
          objectFit="contain"
        />
      </Box>
      <Flex color="neutralPalette.500" flexDirection="column">
        <Text color="greenPalette.400">Nome do restaurante</Text>
        <Text>Tipo do restaurante</Text>
        <SimpleGrid columns={3} spacing="0.5em">
          <Text>50 - 60min</Text>
          <Text>Frete R$</Text>
        </SimpleGrid>
        <Text>Endereço</Text>
      </Flex>
    </Flex>
  );
};

export default RestaurantCard;
