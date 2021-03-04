import AuthContext from "../contexts/authContext";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../constants";

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  const getUserByToken = async () => {
    try {
      const response = await axios.get(`${base_url}/profile`, {
        headers: {
          auth: token,
        },
      });
      console.log(response.data);
      setUser(response.data.user);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      getUserByToken();
    }
  }, [token]);

  const states = { user, token };

  const requests = { getUserByToken };

  const setters = { setUser, setToken };

  const data = { states, requests, setters };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
