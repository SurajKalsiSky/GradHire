import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ClientHomePage = ({ name }) => (
  <div>
    <h2>Welcome {name}</h2>
    <Link to="/create-test">
      <Button size="small">Create a new test</Button>
    </Link>
    <Link to="/test-list">
      <Button size="small">View Tests</Button>
    </Link>
    <Link to="/view-candidates">
      <Button size="small">View candidates</Button>
    </Link>
  </div>
);

const mapStateToProps = ({ user }) => {
  return { name: user.firstname };
};

export const ConnectedClientHomePage = connect(mapStateToProps)(ClientHomePage);
