import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

const SignupPage = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div>
      <h2>Complete the following form to create a new account.</h2>

      <form onSubmit={requestCreateUserAccount}>
        <label>
          <span>User Name</span>
          <input
            type="text"
            placeholder="username"
            name="username"
            defaultValue="Morty"
            className="form-control"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue="COURAGE"
            className="form-control mt-2"
          />
        </label>

        {authenticated == mutations.USERNAME_RESERVED ? (
          <p>A user by that name already exists.</p>
        ) : null}
        <button type="submit" className="form-control mt-2 btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  requestCreateUserAccount(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    console.log("Creating!", username, password);
    dispatch(mutations.requestCreateUserAccount(username, password));
  },
});

export const ConnectedSignupPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
