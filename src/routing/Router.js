import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
