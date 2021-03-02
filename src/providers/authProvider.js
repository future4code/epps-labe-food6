import AuthContext from "../contexts/authContext";

import React, { useState } from "react";

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({
    token: "123456qweasd",
  });

  const states = { user, token };
  const requests = {};
  const setters = { setUser, setToken };
  const data = { states, requests, setters };

  return (
    <AuthContext.Provider value={{ data }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
