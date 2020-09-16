import React, { useState } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const CreateTestPage = ({ userId, submit, createNewTest }) => {
  const [ownerState, setOwnerState] = useState({
    name: "",
    passmark: 1,
  });
  const handleOwnerChange = (e) =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: e.target.value,
    });
  const blankQuestion = {
    question: "",
    answer1: "",
    answer2: "",
    correctanswer: 1,
  };
  const [testState, setTestState] = useState([{ ...blankQuestion }]);
  const addQuestion = () => {
    setTestState([...testState, { ...blankQuestion }]);
  };
  const handleTestChange = (e) => {
    const updatedTest = [...testState];
    updatedTest[e.target.dataset.idx][e.target.className] = e.target.value;
    setTestState(updatedTest);
  };
  return (
    <div>
      <Link to="/home">
        <Button size="small">Back</Button>
      </Link>
      <h2>Create new test</h2>
      <form onSubmit={submit}>
        <label>
          <span>Name of test</span>
          <input
            type="text"
            name="name"
            id="name"
            value={ownerState.name}
            onChange={handleOwnerChange}
            className="name"
          />
        </label>

        {testState.map((val, idx) => {
          const questionId = `question-${idx}`;
          const answer1Id = `answer1-${idx}`;
          const answer2Id = `answer2-${idx}`;
          const correctanswerId = `correctanswer-${idx}`;
          return (
            <div key={`question-block-${idx}`}>
              <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
              <input
                type="text"
                name={questionId}
                data-idx={idx}
                id={questionId}
                className="question"
                value={testState[idx].question}
                onChange={handleTestChange}
              />
              <label htmlFor={answer1Id}>Answer 1</label>
              <input
                type="text"
                name={answer1Id}
                data-idx={idx}
                id={answer1Id}
                className="answer1"
                value={testState[idx].answer1}
                onChange={handleTestChange}
              />
              <label htmlFor={answer2Id}>Answer 2</label>
              <input
                type="text"
                name={answer2Id}
                data-idx={idx}
                id={answer2Id}
                className="answer2"
                value={testState[idx].answer2}
                onChange={handleTestChange}
              />
              <label>
                <span>Correct answer</span>
                <input
                  type="number"
                  name={correctanswerId}
                  data-idx={idx}
                  id={correctanswerId}
                  value={testState[idx].correctanswer}
                  onChange={handleTestChange}
                  className="correctanswer"
                  min="1"
                  max="2"
                />
              </label>
            </div>
          );
        })}

        <label>
          <span>Test pass mark</span>
          <input
            type="number"
            name="passmark"
            id="passmark"
            value={ownerState.passmark}
            onChange={handleOwnerChange}
            className="passmark"
            min="1"
          />
        </label>

        <input type="button" value="+" onClick={addQuestion} />
        <button
          type="submit"
          onClick={() => createNewTest(testState, ownerState, userId)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return { userId: state.user.id };
}

function mapDispatchToProps(dispatch) {
  return {
    submit(e) {
      e.preventDefault();
    },
    createNewTest(testState, ownerState, userId) {
      dispatch(
        mutations.requestTestCreation({
          userId,
          testState,
          ownerState,
        })
      );
    },
  };
}

export const ConnectedCreateTestPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTestPage);
