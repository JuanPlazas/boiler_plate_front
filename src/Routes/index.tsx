import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Modules/Login/LoginScene';
import Home from '../Modules/Home/HomeScene';
import CreateUser from '../Modules/CreateUser/CreateUserScene';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/createUser" component={CreateUser} />
    </Switch>
  );
}