import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import RestaurantDetailsCard from "../components/RestaurantDetailsCard";
import RestaurantContext from "../contexts/restaurantContext";
import useAuth from "../hooks/useAuth";

const RestaurantDetails = () => {
  useAuth();
  const { states, requests } = useContext(RestaurantContext);
  const pathParams = useParams();
  const restaurantId = pathParams.restaurantId;

  useEffect(() => {
    requests.getRestaurantById(restaurantId);
  }, []);

  return (
    <Flex flexDirection="column">
      <Header>Restaurante</Header>
      <RestaurantDetailsCard />
      <Category />
      <ProductCard />
    </Flex>
  );
};

export default RestaurantDetails;
