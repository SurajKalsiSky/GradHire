import { createStore } from "redux";
import { defaultState } from "../server/defaultState";

export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
},
/* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
