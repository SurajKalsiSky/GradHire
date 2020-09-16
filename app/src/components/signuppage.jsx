import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

const SignupPage = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div>
      <h2>Complete the following form to create a new account.</h2>

      <form onSubmit={requestCreateUserAccount}>
        <label>
          <span>First name</span>
          <input type="text" name="firstname" className="form-control mt-2" />
        </label>
        <label>
          <span>Last name</span>
          <input type="text" name="lastname" className="form-control mt-2" />
        </label>
        <label>
          <span>User Name</span>
          <input type="text" name="username" className="form-control" />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            className="form-control mt-2"
          />
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            type="password"
            name="confirmpassword"
            className="form-control mt-2"
          />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" className="form-control mt-2" />
        </label>
        <label>
          <span>Company Logo</span>
          <input type="text" name="companylogo" className="form-control mt-2" />
        </label>
        <label>
          <span>Company Colour</span>
          <input
            type="text"
            name="companycolour"
            className="form-control mt-2"
          />
        </label>

        {authenticated == mutations.USERNAME_RESERVED ? (
          <p>Username taken</p>
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
    console.log("Creating!", signUpInfo);
    dispatch(mutations.requestCreateUserAccount(signUpInfo));
  },
});

export const ConnectedSignupPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
