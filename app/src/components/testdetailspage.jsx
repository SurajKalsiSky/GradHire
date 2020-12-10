import React from "react";
import { connect } from "react-redux";
import { requestGenerateUAC, setTestName } from "../store/mutations";
import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";
import { Title } from "./title";

const TestDetailsPage = ({ id, test, requestGenerateUAC, setTestName }) => (
  <div>
    <Title title={test.name} />
    <Link to="/test-list">
      <Button size="small">Back</Button>
    </Link>
    <div className="extraPadding">
      <b>Change name:</b>
      <Input onChange={setTestName} value={test.name} />
    </div>
    <div>
      <p>
        <b>Test URL: </b>
        {`http://192.168.0.7:3000/candidate/test/${test.id}`}
      </p>
      Click button to generate test access code:
      <Button compact onClick={() => requestGenerateUAC(id)}>
        {test.UAC ? "Generate new code" : "Generate code"}
      </Button>
      <p>
        <b>UAC:</b> {test.UAC}
      </p>
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
