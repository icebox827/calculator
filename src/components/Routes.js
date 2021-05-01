import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Quote from "./Quote";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;