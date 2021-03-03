import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../constants";
import RestaurantContext from "../contexts/restaurantContext";

const RestaurantProvider = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${base_url}/restaurants`, {
        headers: { auth: token },
      });
      setRestaurants(response.data.restaurants);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const states = { restaurant, restaurants };
  const setters = { setRestaurant, setRestaurants };
  const requests = { getRestaurants };
  const data = { states, setters, requests };

  return (
    <RestaurantContext.Provider value={data}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
