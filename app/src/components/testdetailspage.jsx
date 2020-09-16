import React from "react";
import { connect } from "react-redux";
import { requestGenerateUAC, setTestName } from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const TestDetailsPage = ({ id, test, requestGenerateUAC, setTestName }) => (
  <div>
    <Link to="/test-list">
      <Button size="small">Back</Button>
    </Link>
    <div>
      Change name:
      <input onChange={setTestName} value={test.name} />
    </div>
    Test name: {test.name}
    <div>
      <p>Test URL: {`http://localhost:3000/candidate/test/${test.id}`}</p>
      Click button to generate test access code:
      <button onClick={() => requestGenerateUAC(id)}>
        {test.UAC ? "Generate new code" : "Generate code"}
      </button>
      <p>UAC: {test.UAC}</p>
    </div>
  </div>
);

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let test = state.tests.find((test) => test.id === id);

  return {
    id,
    test,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  let id = ownProps.match.params.id;
  return {
    requestGenerateUAC(id) {
      dispatch(requestGenerateUAC(id));
    },
    setTestName(e) {
      dispatch(setTestName(id, e.target.value));
    },
  };
}

export const ConnectedTestDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestDetailsPage);
