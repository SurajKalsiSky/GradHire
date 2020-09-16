import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ViewCandidatesPage = ({ tests }) => (
  <div>
    <Link to="/home">
      <Button size="small">Back</Button>
    </Link>

    <ul>
      {tests.map(
        (test) =>
          test.candidates &&
          test.candidates.map((candidate) => (
            <div>
              <li>
                Name: {candidate.firstname} {candidate.lastname}
              </li>
              <li>
                Score: {candidate.score}/{test.testInfo.testState.length}
              </li>
              <li>Test: {test.name}</li>
              <li>Email: {candidate.name}</li>
            </div>
          ))
      )}
    </ul>
  </div>
);

function mapStateToProps({ tests }) {
  console.log("mapStateToProps -> tests", tests);
  return { tests };
}
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

export const ConnectedViewCandidatesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCandidatesPage);
