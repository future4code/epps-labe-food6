import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Login from "../pages/LoginForm";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AuthProvider from "../providers/authProvider";
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage";
import SignAddress from "../pages/SignAddress";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={"/signUp"}>
            <SignUp />
          </Route>
          <Route exact path={"/signAddress"}>
            <SignAddress />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path={"/:feed"}>
            <Dashboard />
          </Route>
          <Route exact path={"/restaurantdetails"}>
            <RestaurantDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
