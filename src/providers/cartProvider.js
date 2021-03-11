import React, { useContext, useEffect, useState } from "react";

import CartContext from "../contexts/cartContext";

import { base_url } from "../constants";
import axios from "axios";
import AuthContext from "../contexts/authContext";

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [selectQuantity, setSelectQuantity] = useState(0);
  const { authStates } = useContext(AuthContext);

  const getActiveOrder = async () => {
    try {
      const response = await axios.get(`${base_url}/active-order`, {
        headers: {
          auth: authStates.token,
        },
      });

      console.log("Current Active Order", response.data.order);
      setOrder(response.data.order);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && authStates.user.hasAddress) {
      getActiveOrder();
    }
  }, []);

  const cartStates = { products, order, ordersHistory, selectQuantity };
  const cartSetters = {
    setProducts,
    setOrder,
    setOrdersHistory,
    setSelectQuantity,
  };
  const cartRequests = { getActiveOrder };

  const data = { cartStates, cartSetters, cartRequests };
  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
