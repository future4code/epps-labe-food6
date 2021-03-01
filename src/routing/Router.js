import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/signup"}>
          <SignUp />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/feed"}>
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
