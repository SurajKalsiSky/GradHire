import React from "react";
import { connect } from "react-redux";
import { requestTestCreation } from "../store/mutations";
import { Link } from "react-router-dom";

const TestListPage = ({ tests, userId, createNewTest }) => (
  <div>
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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTest(userId) {
      console.log("Creating new test with id", userId);
      dispatch(requestTestCreation(userId));
    },
  };
}

export const ConnectedTestListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestListPage);
