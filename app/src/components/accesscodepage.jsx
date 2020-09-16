import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const AccessCodePage = ({ id, getTest, correctUAC, validTest, test }) => {
  useEffect(() => getTest(id), []);
  return (
    <div>
      {validTest ? (
        <div>
          <h1>{test.testInfo?.ownerState.name}</h1>
          <h2>Please enter the unique access code:</h2>
          <form>
            <input type="text" placeholder="xxxxx" name="UAC" />
            {correctUAC ? <p>Login incorrect!</p> : null}
            {/* <button type="submit">Enter</button> */}
            <Link to="/candidate/sign-in">
              <Button size="small">Enter</Button>
            </Link>
          </form>
        </div>
      ) : (
        <div>Unable to find test</div>
      )}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.match.params.id,
    validTest: state.session.session?.candidate !== "NO_TEST",
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTest(id) {
      console.log("getTest -> id", id);
      dispatch(mutations.getTest(id));
    },
  };
}

export const ConnectedAccessCodePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessCodePage);
