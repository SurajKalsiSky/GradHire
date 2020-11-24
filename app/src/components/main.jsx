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
import { ConnectedClientHomePage } from "./clienthomepage";
import { ConnectedCreateTestPage } from "./createtestpage";
import { ConnectedTestListPage } from "./testlistpage";
import { ConnectedTestDetailsPage } from "./testdetailspage";
import { ConnectedViewCandidatesPage } from "./viewcandidatespage";
import { ConnectedAccessCodePage } from "./accesscodepage";
import { ConnectedCandSignIn } from "./candsigninpage";
import { ConnectedCandSignUp } from "./candsignuppage";
import { ConnectedQuestionPage } from "./questionpage";
import { ConnectedFinished } from "./finishedpage";

const RouteGuard = (Component) => ({ match }) =>
  store.getState().session.authenticated === "AUTHENTICATED" ? (
    <Component match={match} />
  ) : (
    <Redirect to="/sign-in" />
  );

const CandidateRouteGuard = (Component) => ({ match }) =>
  store.getState().session.authenticated === "AUTHENTICATED" ? (
    <Component match={match} />
  ) : (
    <Redirect to="/candidate/sign-in" />
  );

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <div class="page center">
          <div class="main">
            <Route exact path="/sign-in" component={ConnectedSignInPage} />
            <Route exact path="/sign-up" component={ConnectedSignupPage} />
            <Route
              exact
              path="/home"
              render={RouteGuard(ConnectedClientHomePage)}
            />
            <Route
              exact
              path="/create-test"
              render={RouteGuard(ConnectedCreateTestPage)}
            />
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
            <Route
              exact
              path="/view-candidates"
              render={RouteGuard(ConnectedViewCandidatesPage)}
            />
            <Route exact path="/" render={() => <ConnectedHomePage />} />
            <Route
              exact
              path="/candidate/test/:id"
              component={ConnectedAccessCodePage}
            />
            <Route
              exact
              path="/candidate/sign-in"
              component={ConnectedCandSignIn}
            />
            <Route
              exact
              path="/candidate/sign-up"
              component={ConnectedCandSignUp}
            />
            <Route
              exact
              path="/question/:id"
              render={CandidateRouteGuard(ConnectedQuestionPage)}
            />
            <Route
              exact
              path="/finished"
              render={CandidateRouteGuard(ConnectedFinished)}
            />
          </div>
        </div>
      </div>
    </Provider>
  </Router>
);
