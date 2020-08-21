import React from "react";
import { connect } from "react-redux";

export const HomePage = ({ tests }) => (
  <div>
    <h2>"Hiring made simple"</h2>
    {tests.map((test) => (
      <div>{test.name}</div>
    ))}
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedHomePage = connect(mapStateToProps)(HomePage);
