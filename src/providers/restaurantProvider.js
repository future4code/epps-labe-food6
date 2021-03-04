import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../constants";
import RestaurantContext from "../contexts/restaurantContext";

const RestaurantProvider = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const token = localStorage.getItem("token");

  const getRestaurants = async () => {
    try {
      const response = await axios.get(`${base_url}/restaurants`, {
        headers: { auth: token },
      });
      setRestaurants(response.data.restaurants);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const getRestaurantById = async (restaurantId) => {
    try {
      const response = await axios.get(
        `${base_url}/restaurants/${restaurantId}`,
        { headers: { auth: token } }
      );
      console.log(response.data);
      setRestaurant(response.data.restaurant);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    if (token) {
      getRestaurants();
    }
  }, []);

  const states = { restaurant, restaurants };
  const setters = { setRestaurant, setRestaurants };
  const requests = { getRestaurants, getRestaurantById };
  const data = { states, setters, requests };

  return (
    <RestaurantContext.Provider value={data}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
