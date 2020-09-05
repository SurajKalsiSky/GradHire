import React, { Component } from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Router, Route } from "react-router-dom";
import { store } from "../store";
import { history } from "../store/history";
import { ConnectedNavigation } from "./navigation";
import { ConnectedHomePage } from "./homepage";
import { ConnectedSignInPage } from "./signinpage";
import { ConnectedSignupPage } from "./signuppage";
import { ConnectedTestListPage } from "./testlistpage";
import { ConnectedTestDetailsPage } from "./testdetailspage";

const RouteGuard = (Component) => ({ match }) =>
  store.getState().session.authenticated === "AUTHENTICATED" ? (
    <Component match={match} />
  ) : (
    <Redirect to="/sign-in" />
  );

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <div class="main">
          <Route exact path="/sign-in" component={ConnectedSignInPage} />
          <Route exact path="/sign-up" component={ConnectedSignupPage} />
          <Route
            exact
            path="/test-list"
            render={RouteGuard(ConnectedTestListPage)}
          />
          <Route
            exact
            path="/test/:id"
            render={RouteGuard(ConnectedTestDetailsPage)}
          />
          <Route exact path="/" render={() => <ConnectedHomePage />} />
        </div>
      </div>
    </Provider>
  </Router>
);
