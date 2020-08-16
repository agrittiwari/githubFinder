import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";

import GithubState from "./Context/github/GithubState";

import Users from "./Components/Users/Users";
import Search from "./Components/Users/Search";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import User from "./Components/Users/User";

const App = () => {
  const [alert, setAlert] = useState(null);

  //Get Users repos

  //Set Alert
  const showAlert = (msg, type) => {
    //this.setState({ alert: msg, type: type });
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  // const { users, user, repos, loading } = this.state;

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
