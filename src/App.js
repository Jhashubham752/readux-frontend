import React from "react";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Profile from "./components/Profile";
const App = () => {
  
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
