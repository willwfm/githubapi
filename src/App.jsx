import React from "react";
import { Route, Switch } from "react-router-dom";

import { WrapperLayout } from "components";

import { User, Repository } from "views";

import "./App.module.css";

function App() {
  return (
    <Switch>
      <Route
        path="/repository"
        exact
        render={props => WrapperLayout(Repository, props)}
      />
      <Route
        path="/"
        exact={true}
        render={props => WrapperLayout(User, props)}
      />
    </Switch>
  );
}

export default App;
