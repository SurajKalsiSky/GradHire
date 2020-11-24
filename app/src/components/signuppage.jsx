import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import { Title } from "./title";

const SignupPage = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div>
      <Title title={"Sign up"} />
      <Link to="/">
        <Button size="small">Back</Button>
      </Link>
      <Form error onSubmit={requestCreateUserAccount}>
        <Form.Group unstackable widths={2}>
          <Form.Field required>
            <label>First name</label>
            <input placeholder="John" name="firstname" />
          </Form.Field>
          <Form.Field required>
            <label>Last name</label>
            <input placeholder="Smith" name="lastname" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Field required>
            <label>Username</label>
            <input name="username" />
          </Form.Field>
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
        <Form.Group widths={3}>
          <Form.Field required>
            <label>Company</label>
            <input placeholder="Sky" name="company" />
          </Form.Field>
          <Form.Field required>
            <label>Company Logo</label>
            <input name="companylogo" />
          </Form.Field>
          <Form.Field required>
            <label>Company Colour</label>
            <input name="companycolour" />
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
      company: e.target[`company`].value,
      companylogo: e.target[`companylogo`].value,
      companycolour: e.target[`companycolour`].value,
    };
    dispatch(mutations.requestCreateUserAccount(signUpInfo));
  },
});

export const ConnectedSignupPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
