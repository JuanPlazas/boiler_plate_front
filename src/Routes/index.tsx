import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Modules/Login/LoginScene';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}