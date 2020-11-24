import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Title } from "./title";

const ClientHomePage = ({ name }) => (
  <div>
    <Title title={`Welcome ${name}`} />
    <div class="center">
      <h1>What would you like to do?</h1>
      <Link to="/create-test">
        <Button size="big">Create a new test</Button>
      </Link>
      <Link to="/test-list">
        <Button size="big">View Tests</Button>
      </Link>
      <Link to="/view-candidates">
        <Button size="big">View candidates</Button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ user }) => {
  return { name: user.firstname };
};

export const ConnectedClientHomePage = connect(mapStateToProps)(ClientHomePage);
