import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Form, Button, Message, Input } from "semantic-ui-react";
import { Title } from "./title";

const SignInPage = ({ authenticated, authenticateUser }) => (
  <div>
    <Title title={"Sign in"} />
    <Link to="/">
      <Button size="small">Back</Button>
    </Link>
    <Form error onSubmit={authenticateUser}>
      <Form.Field required>
        <label>Username</label>
        <Input placeholder="Username" name="username" />
      </Form.Field>
      <Form.Field required>
        <label>Password</label>
        <Input placeholder="*******" type="password" name="password" />
      </Form.Field>
      <Button type="submit">Log in</Button>
      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <Message
          error
          header="Unable to sign in"
          content="The username and/or password is incorrect"
        />
      ) : null}
    </Form>

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
