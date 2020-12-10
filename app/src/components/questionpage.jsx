import React, { useState } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Button, Dropdown } from "semantic-ui-react";
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
  const handleTestChange = (e, { value }) => setTestState(value);
  if (testDetails) {
    const options = [
      { key: 1, text: 1, value: 1 },
      { key: 2, text: 2, value: 2 },
    ];
    return (
      <div>
        <Title title={`Question ${id + 1}`} />
        <h1>{testDetails.question}?</h1>
        <h4>1) {testDetails.answer1}</h4>
        <h4>2) {testDetails.answer2}</h4>
        <span>
          <h5>Please select your answer: </h5>
          <Dropdown
            onChange={handleTestChange}
            clearable
            options={options}
            selection
            compact
            closeOnEscape
          />
        </span>
        <div className="extraPadding">
          <Button
            type="submit"
            onClick={() =>
              sumbitAnswer(testState, testDetails, nextTest, nextId, user, test)
            }
          >
            Next
          </Button>
        </div>
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
