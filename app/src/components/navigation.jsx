import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navigation = () => (
  <div class="nav">
    <Link to="/">
      <img src={require("../assets/images/logo4.png")} class="center" />
    </Link>
    <Link to="/sign-in">
      <Button inverted size="small" floated="right">
        Sign in
      </Button>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return state;
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
