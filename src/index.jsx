import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import jwt from "jsonwebtoken";

import App from "./App";
import fileKey from "./apigrapqlgit.private-key.pem";

import "./App.module.css";

const now = Math.floor(Date.now() / 1000);

//# Generate the JWT
const payload = {
  // # issued at time
  iat: now,
  // # JWT expiration time (10 minute maximum)
  exp: now + 60,
  // # GitHub App's identifier
  iss: process.env.REACT_APP_ID
};

(async function loadTojenAuthentication() {
  let key = await fetch(fileKey);

  key = await key.text();

  const token = jwt.sign(payload, key, { algorithm: "RS256" });

  const headers = new Headers({
    Accept: "application/vnd.github.machine-man-preview+json",
    Authorization: `Bearer ${token}`
  });

  const res = await fetch(
    `https://api.github.com/installations/${
      process.env.REACT_APP_GITHUB_INSTALATION_ID
    }/access_tokens`,
    { method: "POST", headers }
  );

  const result = await res.json();

  headers.set("Authorization", `Bearer ${result.token}`);

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_API_GRAPHQL,
    request: operation => {
      operation.setContext({
        headers: {
          accept: headers.get("Accept"),
          authorization: headers.get("Authorization")
        }
      });
    }
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </HashRouter>
    </ApolloProvider>,
    document.getElementById("root")
  );
})();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
