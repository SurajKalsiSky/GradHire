import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { Title } from "./title";

const SignInPage = ({ authenticated, authenticateUser }) => (
  <div>
    <Title title={"Sign in"} />
    <Link to="/">
      <Button size="small">Back</Button>
    </Link>
    <Form onSubmit={authenticateUser}>
      <Form.Field>
        <label>Username</label>
        <input placeholder="Username" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" type="password" />
      </Form.Field>
      <Button type="submit">Log in</Button>
    </Form>

    {/* <form onSubmit={authenticateUser}>
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
    </Link> */}
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
