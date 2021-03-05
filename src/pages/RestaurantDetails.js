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
  const { restaurantStates, restaurantRequests } = useContext(
    RestaurantContext
  );
  const pathParams = useParams();
  const restaurantId = pathParams.restaurantId;

  useEffect(() => {
    restaurantRequests.getRestaurantById(restaurantId);
  }, []);

  return (
    <Flex flexDirection="column" w="100vw">
      <Header>Restaurante</Header>
      <RestaurantDetailsCard
        name={restaurantStates.restaurant.name}
        type={restaurantStates.restaurant.type}
        deliveryTime={restaurantStates.restaurant.deliveryTime}
        logoUrl={restaurantStates.restaurant.logoUrl}
        shipping={restaurantStates.restaurant.shipping}
        address={restaurantStates.restaurant.address}
      />
      <Category />
      {restaurantStates.restaurant.products &&
        restaurantStates.restaurant.products.map((product) => {
          return (
            <ProductCard
              idToAdd={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              photoUrl={product.photoUrl}
            />
          );
        })}
    </Flex>
  );
};

export default RestaurantDetails;
