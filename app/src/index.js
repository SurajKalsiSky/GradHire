import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Exam from "./exam";
import Code from "./code";
import Admin from "./admin";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router history={createBrowserHistory()}>
//     <Route path="/" component={App}></Route>
//     <Route path="/exam" component={Exam}></Route>
//     <Route path="/code" component={Code}></Route>
//     <Route path="/admin" component={Admin}></Route>
//   </Router>,
//   document.getElementById("root")
// );
