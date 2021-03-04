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
    <Flex flexDirection="column" w="100vw">
      <Header>Restaurante</Header>
      <RestaurantDetailsCard
        name={states.restaurant.name}
        type={states.restaurant.type}
        deliveryTime={states.restaurant.deliveryTime}
        logoUrl={states.restaurant.logoUrl}
        shipping={states.restaurant.shipping}
        address={states.restaurant.address}
      />
      <Category />
      {states.restaurant.products &&
        states.restaurant.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
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
