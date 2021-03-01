import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
    
      <Route exact path={"/login"}>
        <Login />
      </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
