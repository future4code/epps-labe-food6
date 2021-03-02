import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AuthProvider from "../providers/authProvider";
import RestaurantDetails from "../pages/RestaurantDetails";
import SignAddress from "../pages/SignAddress";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";

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
          <Route exact path={"/feed/:page"}>
            <Dashboard />
          </Route>
          <Route exact path={"/feed/cart/:userId"}>
            <Cart />
          </Route>
          <Route exact path={"/feed/profile/:userId"}>
            <Profile />
          </Route>
          <Route exact path={"/restaurantdetails"}>
            <RestaurantDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
