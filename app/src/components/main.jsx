import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./navigation";
import { ConnectedHomePage } from "./homepage";
import { ConnectedSignInPage } from "./signinpage";
import { ConnectedTestListPage } from "./testlistpage";
import { ConnectedTestDetailsPage } from "./testdetailspage";

export const Main = () => (
  <BrowserRouter history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <div class="main">
          <Switch>
            <Route
              exact
              path="/sign-in"
              render={() => <ConnectedSignInPage />}
            />
            <Route
              exact
              path="/test-list"
              render={() => <ConnectedTestListPage />}
            />
            <Route
              exact
              path="/test/:id"
              render={({ match }) => <ConnectedTestDetailsPage match={match} />}
            />
            <Route path="/" render={() => <ConnectedHomePage />} />
          </Switch>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);
