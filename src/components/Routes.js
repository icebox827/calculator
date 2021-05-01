import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Quote from "./Quote";
import Navbar from './Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;