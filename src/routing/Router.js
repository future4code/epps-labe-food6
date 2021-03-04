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
import RestaurantProvider from "../providers/restaurantProvider";

import Error from "../pages/Error";
import EditProfile from "../pages/EditProfile";

const Router = () => {
  return (
    <AuthProvider>
      <RestaurantProvider>
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
            <Route exact path={"/feed/restaurants"}>
              <Dashboard />
            </Route>
            <Route exact path={"/feed/details/:restaurantId"}>
              <RestaurantDetails />
            </Route>
            <Route exact path={"/feed/cart/:userId"}>
              <Cart />
            </Route>
            <Route exact path={"/feed/profile/:userId"}>
              <Profile />
            </Route>
            <Route exact path={"/feed/profile/edit/:userId"}>
              <EditProfile />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </RestaurantProvider>
    </AuthProvider>
  );
};

export default Router;
