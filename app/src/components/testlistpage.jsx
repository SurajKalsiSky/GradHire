import React from "react";
import { connect } from "react-redux";
import { requestTestCreation } from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const TestListPage = ({ tests, userId, createNewTest }) => (
  <div>
    <Link to="/home">
      <Button size="small">Back</Button>
    </Link>
    <h2>Tests</h2>
    {tests.map((test) => (
      <Link to={`/test/${test.id}`} key={test.id}>
        <div>{test.name}</div>
      </Link>
    ))}
    <button onClick={() => createNewTest(userId)}>Add new test</button>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests, userId: state.user.id };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewTest(userId) {
      dispatch(requestTestCreation(userId));
    },
  };
}

export const ConnectedTestListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestListPage);
