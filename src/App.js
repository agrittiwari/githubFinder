import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";

import GithubState from "./Context/github/GithubState";
import AlertState from "./Context/Alert/AlertState";

import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";

import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import User from "./Components/Users/User";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
