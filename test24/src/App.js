import React from "react";
import Routes from "./routes/Routes";
import { connect } from "react-redux";

const App = ({ isAuth }) => {
  return <Routes isAuth={isAuth} />
}

const mapStateToProps = state => {
  return {
    isAuth: state.data.isAuth
  };
};

export default connect(mapStateToProps)(App);
