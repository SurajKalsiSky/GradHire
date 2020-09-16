import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const SignInPage = ({ authenticated, authenticateUser }) => (
  <div>
    <Link to="/">
      <Button size="small">Back</Button>
    </Link>
    <h2>Please sign in</h2>
    <form onSubmit={authenticateUser}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <p>Login incorrect!</p>
      ) : null}
      <button type="submit">Log in</button>
    </form>
    <h3>No sign in?</h3>
    <Link to="/sign-up">
      <Button size="small">Sign up</Button>
    </Link>
  </div>
);

const mapStateToProps = ({ session }) => {
  return { authenticated: session.authenticated };
};
function mapDispatchToProps(dispatch) {
  return {
    authenticateUser(e) {
      e.preventDefault();
      let username = e.target["username"].value;
      let password = e.target["password"].value;
      dispatch(mutations.requestAuthenticateUser(username, password));
    },
  };
}

export const ConnectedSignInPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
