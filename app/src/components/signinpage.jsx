import React from "react";
import { connect } from "react-redux";

const SignInPage = ({ tests }) => (
  <div>
    <h2>"Please sign in :)"</h2>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedSignInPage = connect(mapStateToProps)(SignInPage);
