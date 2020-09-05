import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
// import * as sagas from "./sagas.mock";
import * as sagas from "./sagas";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
