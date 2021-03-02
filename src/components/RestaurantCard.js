import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const RestaurantCard = ({
  key,
  deliveryTime,
  category,
  description,
  shipping,
  address,
  name,
  logoUrl,
}) => {
  return (
    <Flex
      as="article"
      flexDirection="column"
      my="0.5em"
      mx="1em"
      p="0"
      border="1px lightgray solid"
      borderRadius="8px"
    >
      <Box grow="1">
        <Image
          src={logoUrl}
          grow="1"
          alt={description}
          objectFit="contain"
          borderRadius="8px 8px 0 0"
        />
      </Box>
      <Flex color="neutralPalette.500" flexDirection="column" padding="1em">
        <Text color="greenPalette.400">{name}</Text>
        <Flex justify="space-between">
          <Text>{deliveryTime} min</Text>
          <Text>Frete R${shipping},00 </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RestaurantCard;
