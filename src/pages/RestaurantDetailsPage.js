import { Flex } from "@chakra-ui/react";
import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import RestaurantDetailsCard from "../components/RestaurantDetailsCard";

const RestaurantDetailsPage = () => {
  return (
    <Flex flexDirection="column">
      <Header>Restaurante</Header>
      <RestaurantDetailsCard />
      <Category />
      <ProductCard />
    </Flex>
  );
};

export default RestaurantDetailsPage;
