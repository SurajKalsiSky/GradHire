import React from "react";
import { connect } from "react-redux";
import { requestTestCreation } from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Title } from "./title";

const TestListPage = ({ tests }) => (
  <div>
    <Title title={"View tests"} />
    <Link to="/home">
      <Button size="small">Back</Button>
    </Link>
    {tests.map((test) => (
      <div className="extraPadding">
        <div>{test.name}</div>
        <Link to={`/test/${test.id}`} key={test.id}>
          <Button
            className="testListPageButton"
            size="small"
            compact
            color="red"
          >
            View
          </Button>
        </Link>
      </div>
    ))}
    <Link to="/create-test">
      <Button color="green">Add new test</Button>
    </Link>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedTestListPage = connect(mapStateToProps)(TestListPage);
