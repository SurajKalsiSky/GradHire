import React, { useState } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Form, Button, Input } from "semantic-ui-react";
import { Title } from "./title";

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
      <Title title={"Create a new test"} />
      <Link to="/home">
        <Button size="small">Back</Button>
      </Link>

      <Form onSubmit={submit}>
        <Form.Field>
          <label>Name of test</label>
          <Input
            name="name"
            id="name"
            value={ownerState.name}
            onChange={handleOwnerChange}
            className="name"
          />
        </Form.Field>

        {testState.map((val, idx) => {
          const questionId = `question-${idx}`;
          const answer1Id = `answer1-${idx}`;
          const answer2Id = `answer2-${idx}`;
          const correctanswerId = `correctanswer-${idx}`;
          return (
            <div key={`question-block-${idx}`}>
              <Form.Field>
                <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
                <Input
                  name={questionId}
                  data-idx={idx}
                  id={questionId}
                  className="question"
                  value={testState[idx].question}
                  onChange={handleTestChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor={answer1Id}>Answer 1</label>
                <Input
                  name={answer1Id}
                  data-idx={idx}
                  id={answer1Id}
                  className="answer1"
                  value={testState[idx].answer1}
                  onChange={handleTestChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor={answer2Id}>Answer 2</label>
                <Input
                  type="text"
                  name={answer2Id}
                  data-idx={idx}
                  id={answer2Id}
                  className="answer2"
                  value={testState[idx].answer2}
                  onChange={handleTestChange}
                />
              </Form.Field>
              <Form.Field>
                <label>
                  <span>Correct answer</span>
                  <Input
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
              </Form.Field>
            </div>
          );
        })}

        <Form.Field>
          <label>Test pass mark</label>
          <Input
            type="number"
            name="passmark"
            id="passmark"
            value={ownerState.passmark}
            onChange={handleOwnerChange}
            className="passmark"
            min="1"
          />
        </Form.Field>
        <Button color="green" onClick={addQuestion}>
          +
        </Button>
        <Button
          color="red"
          type="submit"
          onClick={() => createNewTest(testState, ownerState, userId)}
        >
          Save
        </Button>
      </Form>
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
