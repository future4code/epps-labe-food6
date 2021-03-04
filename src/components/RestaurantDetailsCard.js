import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const RestaurantCard = ({
  name,
  type,
  deliveryTime,
  logoUrl,
  shipping,
  address,
}) => {
  return (
    <Flex as="article" flexDirection="column" m="1em">
      <Box py="1em">
        <Image
          src={logoUrl}
          alt="Shawarma de falafel mega gostoso"
          objectFit="contain"
          borderRadius="8px 8px 0 0"
        />
      </Box>
      <Flex color="neutralPalette.500" flexDirection="column">
        <Text color="greenPalette.400">{name}</Text>
        <Text>{type}</Text>
        <Flex justify="space-between">
          <Text>{deliveryTime} min</Text>
          <Text>Frete R$ {shipping},00</Text>
        </Flex>
        <Text>{address}</Text>
      </Flex>
    </Flex>
  );
};

export default RestaurantCard;
