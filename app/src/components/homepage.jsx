import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = ({ tests }) => (
  <div>
    <h2>"Hiring made simple"</h2>
    {tests.map((test) => (
      <div>{test.name}</div>
    ))}
    <Link to="/test-list">
      <h1>View test list</h1>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedHomePage = connect(mapStateToProps)(HomePage);
