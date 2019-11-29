import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed}) => {
  return (
    <Route
      render={props => (
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      )}
    />
  )
}

export default PrivateRoute;
