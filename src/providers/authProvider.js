import AuthContext from "../contexts/authContext";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../constants";

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  const getUserByToken = async () => {
    try {
      const response = await axios.get(`${base_url}/profile`, {
        headers: {
          auth: token,
        },
      });
      console.log("Current User", response.data.user);
      setUser(response.data.user);
      console.log(token);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(`${base_url}/profile/address`, {
        headers: {
          auth: token,
        },
      });
      setAddress(response.data.address);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      getUserByToken();
    }
    if (authStates.user.hasAddress) {
      getAddress();
    }
  }, [token]);

  const authStates = { user, token, address };

  const authRequests = { getUserByToken, getAddress };

  const authSetters = { setUser, setToken, setAddress };

  const data = { authStates, authRequests, authSetters };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
