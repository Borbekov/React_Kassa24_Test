import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../views/auth/LoginPage";
import MainPage from "../views/main/MainPage";

const Routes = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact authed={isAuth} path="/" component={MainPage} />
        <Route path="/signin" component={LoginPage} />
      </Switch>
   </BrowserRouter>
  )
}

export default Routes;
