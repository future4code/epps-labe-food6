import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={"/signup"}>
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path={"/feed"}>
          <DashboardPage />
        </Route>
        <Route exact path={"/restaurantdetails"}>
          <RestaurantDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
