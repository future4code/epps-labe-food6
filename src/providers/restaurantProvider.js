import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";
import RestaurantContext from "../contexts/restaurantContext";

const RestaurantProvider = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const { authStates } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  const getRestaurants = async () => {
    try {
      if (authStates.user.hasAddress) {
        const response = await axios.get(`${base_url}/restaurants`, {
          headers: { auth: token },
        });
        console.log(response.data.restaurants);
        setRestaurants(response.data.restaurants);
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const getRestaurantById = async (restaurantId) => {
    try {
      if (authStates.user.hasAddress) {
        const response = await axios.get(
          `${base_url}/restaurants/${restaurantId}`,
          { headers: { auth: token } }
        );
        console.log("Current Restaurant", response.data.restaurant);
        setRestaurant(response.data.restaurant);
      }
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const restaurantStates = { restaurant, restaurants };
  const restaurantSetters = { setRestaurant, setRestaurants };
  const restaurantRequests = { getRestaurants, getRestaurantById };
  const data = { restaurantStates, restaurantSetters, restaurantRequests };

  return (
    <RestaurantContext.Provider value={data}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
