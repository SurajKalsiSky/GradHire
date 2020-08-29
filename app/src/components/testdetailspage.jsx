import React from "react";
import { connect } from "react-redux";
import { requestGenerateUAC, setTestName } from "../store/mutations";

const TestDetailsPage = ({ id, test, requestGenerateUAC, setTestName }) => (
  <div>
    <div>
      <input onChange={setTestName} value={test.name} />
    </div>
    {id}:{test.name}
    Created by user: {test.userId}
    Click button to generate test access code:
    <button onClick={() => requestGenerateUAC(id)}>
      {test.UAC ? "Generate new code" : "Generate code"}
    </button>
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
