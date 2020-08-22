import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <Link to="/">
      <h1>GO TO HOMEPAGE</h1>
    </Link>
    <Link to="/sign-in">
      <h1>SIGN IN</h1>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return state;
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
