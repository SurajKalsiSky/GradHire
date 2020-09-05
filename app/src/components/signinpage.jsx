import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const SignInPage = ({ authenticated, authenticateUser }) => (
  <div>
    <h2>"Please sign in :)"</h2>
    <form onSubmit={authenticateUser}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="password" name="password" />
      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <p>Login incorrect!</p>
      ) : null}
      <button type="submit">Log in</button>
    </form>
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
