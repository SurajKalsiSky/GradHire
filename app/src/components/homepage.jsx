import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const HomePage = ({ tests }) => (
  <div>
    <h2>"Hiring made simple"</h2>
    {tests.map((test) => (
      <div>{test.name}</div>
    ))}
    <Link to="/test-list">
      <h1>View test list</h1>
    </Link>
    <Link to="/sign-up">
      <Button size="small">Sign up</Button>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedHomePage = connect(mapStateToProps)(HomePage);
