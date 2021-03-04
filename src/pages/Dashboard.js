import React, { useContext } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import RestaurantCard from "../components/RestaurantCard";

import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import RestaurantContext from "../contexts/restaurantContext";
import { useInput } from "../hooks/useInput";

const Dashboard = () => {
  const { restaurantStates } = useContext(RestaurantContext);
  useAuth();

  const [search, handleSearch] = useInput();

  const category = restaurantStates.restaurants
    .reduce((acc, current) => {
      const key = acc.find((item) => item.category === current.category);
      if (!key) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, [])
    .map((restaurant) => {
      return <Tab key={restaurant.id}>{restaurant.category}</Tab>;
    });

  const restaurantsList = restaurantStates.restaurants.map((restaurant) => {
    // .filter => restaurante por tipo ===== array restaurantes

    // .filter => restaurante por nome ===== array restaurantes com nome >por tipo ou não<
    return (
      <RestaurantCard
        key={restaurant.id}
        restaurantId={restaurant.id}
        deliveryTime={restaurant.deliveryTime}
        category={restaurant.category}
        description={restaurant.description}
        shipping={restaurant.shipping}
        address={restaurant.adress}
        name={restaurant.name}
        logoUrl={restaurant.logoUrl}
      />
    );
  });

  return (
    <Flex as="main" h="100vh" w="100vw" direction="column" align="center">
      <Flex
        as="section"
        maxW="100vw"
        direction="column"
        align="center"
        paddingBottom="80px"
      >
        <Header>FutureEats</Header>

        <Box paddingX="4" w="100%">
          <InputGroup marginTop="2">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              value={search}
              onChange={handleSearch}
              placeholder="Restaurante"
            />
          </InputGroup>
        </Box>

        <Tabs maxW="100vw">
          <TabList overflowX="auto" maxW="100vw">
            {category && category}
          </TabList>
          <TabPanels maxW="100vw">
            {restaurantsList && restaurantsList}
          </TabPanels>
        </Tabs>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Dashboard;
