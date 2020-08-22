import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./navigation";
import { ConnectedHomePage } from "./homepage";
import { ConnectedSignInPage } from "./signinpage";
import { ConnectedTestListPage } from "./testlistpage";

export const Main = () => (
  <BrowserRouter history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Switch>
          <Route exact path="/sign-in" render={() => <ConnectedSignInPage />} />
          <Route
            exact
            path="/test-list"
            render={() => <ConnectedTestListPage />}
          />
          <Route path="/" render={() => <ConnectedHomePage />} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);
