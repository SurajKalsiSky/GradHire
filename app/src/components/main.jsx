import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedHomePage } from "./homepage";

export const Main = () => (
  <Provider store={store}>
    <div>
      <ConnectedHomePage />
    </div>
  </Provider>
);
