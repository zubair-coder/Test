import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    );
  }
}
