import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import "./App.css";
import SavedBooks from "./pages/SavedBooks";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/savedBooks">
              <SavedBooks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
