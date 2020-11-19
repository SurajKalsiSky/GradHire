import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Menu, Container } from "semantic-ui-react";

const Navigation = () => (
  <div class="nav">
    <Link to="/">
      <img src={require("../assets/images/logo4.png")} class="center image" />
    </Link>
    <Link to="/sign-in">
      <div class="signin-button">
        <Button inverted size="small" floated="right">
          Sign in
        </Button>
      </div>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return state;
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
