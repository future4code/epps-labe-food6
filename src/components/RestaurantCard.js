import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurantDetails } from "../routing/Coordinator";

const RestaurantCard = ({
  key,
  restaurantId,
  deliveryTime,
  category,
  description,
  shipping,
  address,
  name,
  logoUrl,
}) => {
  const history = useHistory();

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
      <Box w="100%">
        <Image
          maxWidth="100%"
          src={logoUrl}
          alt={description}
          objectFit="contain"
          borderRadius="8px 8px 0 0"
          onClick={() => goToRestaurantDetails(history, restaurantId)}
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
