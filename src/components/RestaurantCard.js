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
      flexDirection="column"
      my="0.5em"
      mx="1em"
      p="0"
      borderRadius="8px"
      border="1px lightgray solid"
    >
      <Box isFullWidth paddingTop="0.5em">
        <Image
          src={logoUrl}
          w="328px"
          h="120px"
          alt={description}
          objectFit="contain"
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
