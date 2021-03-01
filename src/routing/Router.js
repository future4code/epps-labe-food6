import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
