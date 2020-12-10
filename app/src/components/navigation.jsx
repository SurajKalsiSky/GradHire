import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import * as mutations from "../store/mutations";

const Navigation = ({ buttonText, logo, colour }) => {
  return (
    <div>
      {logo ? (
        <div
          class="nav"
          style={{
            backgroundColor: colour,
          }}
        >
          <img src={logo} class="center image" />
        </div>
      ) : (
        <div class="nav">
          <Link to="/">
            <img
              src={require("../assets/images/logo4.png")}
              class="center image"
            />
          </Link>
          <Link to="/sign-in">
            <div class="signin-button">
              <Button inverted size="small" floated="right">
                {buttonText}
              </Button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ session, test }) => {
  if (test.id) {
    return { logo: test.testInfo.logo, colour: test.testInfo.colour };
  }
  if (session.authenticated === mutations.AUTHENTICATED) {
    return { buttonText: "Sign out" };
  }
  return { buttonText: "Sign in" };
};

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
