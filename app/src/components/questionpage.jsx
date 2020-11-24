import React, { useState } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";
import { Title } from "./title";

const QuestionPage = ({
  testDetails,
  id,
  sumbitAnswer,
  nextTest,
  nextId,
  user,
  test,
}) => {
  const [testState, setTestState] = useState(1);
  const handleTestChange = (e) => setTestState(e.target.value);
  if (testDetails) {
    return (
      <div>
        <Title title={`Question ${id + 1}`} />
        <h3>{testDetails.question}?</h3>
        <h3>Answer 1: {testDetails.answer1}</h3>
        <h3>Answer 2: {testDetails.answer2}</h3>

        <Input
          type="number"
          name={"answer"}
          id={1}
          value={testState.answer}
          onChange={handleTestChange}
          min="1"
          max="2"
        />

        <Button
          type="submit"
          onClick={() =>
            sumbitAnswer(testState, testDetails, nextTest, nextId, user, test)
          }
        >
          Next
        </Button>
        {/* {nextTest ? (
          <Link to={`/question/${id + 1}`}>
            <Button size="small">Next</Button>
          </Link>
        ) : (
          <Link to="/finished">
            <Button size="small">Finish</Button>
          </Link>
        )} */}
      </div>
    );
  } else {
    return <div>No test found, please go back</div>;
  }
};

function mapStateToProps(state, ownProps) {
  let id = Number(ownProps.match.params.id);
  return {
    id,
    testDetails: state.test.testInfo?.testState[id],
    nextTest: state.test.testInfo?.testState[id + 1] !== undefined,
    nextId: id + 1,
    user: state.user,
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sumbitAnswer(answer, testDetails, nextTest, nextId, user, test) {
      dispatch(
        mutations.submitAnswer({
          answerCorrect: answer == testDetails.correctanswer,
          nextTest,
          nextId,
          user,
          test,
        })
      );
    },
  };
}

export const ConnectedQuestionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPage);
