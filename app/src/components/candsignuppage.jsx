import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import { Title } from "./title";

const CandSignUp = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div>
      <Title title={"Sign up"} />
      <Link to="/">
        <Button size="small">Back</Button>
      </Link>
      <h3>Please complete the following form to create a new account.</h3>
      <Form error onSubmit={requestCreateUserAccount}>
        <Form.Group unstackable widths={3}>
          <Form.Field required>
            <label>First name</label>
            <input placeholder="John" name="firstname" />
          </Form.Field>
          <Form.Field required>
            <label>Last name</label>
            <input placeholder="Smith" name="lastname" />
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <input name="username" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Field required>
            <label>Password</label>
            <input placeholder="********" type="password" name="password" />
          </Form.Field>
          <Form.Field required>
            <label>Confirm Password</label>
            <input
              placeholder="********"
              type="password"
              name="confirmpassword"
            />
          </Form.Field>
        </Form.Group>
        <Form.Checkbox required label="I agree to the Terms and Conditions" />
        <Button type="submit">Sign Up</Button>
        {authenticated === mutations.USERNAME_RESERVED ? (
          <Message
            error
            header="Username taken"
            content="Please try a different username"
          />
        ) : null}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  requestCreateUserAccount(e) {
    e.preventDefault();
    const signUpInfo = {
      firstname: e.target[`firstname`].value,
      lastname: e.target[`lastname`].value,
      username: e.target[`username`].value,
      password: e.target[`password`].value,
      confirmpassword: e.target[`confirmpassword`].value,
      candidate: true,
    };
    dispatch(mutations.requestCreateUserAccount(signUpInfo));
  },
});

export const ConnectedCandSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandSignUp);
