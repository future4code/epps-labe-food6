import { Flex } from "@chakra-ui/react";
import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import RestaurantDetailsCard from "../components/RestaurantDetailsCard";

const RestaurantDetails = () => {
  return (
    <Flex flexDirection="column">
      <Header>Restaurante</Header>
      <RestaurantDetailsCard />
      <Category />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Flex>
  );
};

export default RestaurantDetails;