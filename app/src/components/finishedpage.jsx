import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Title } from "./title";

const Finished = ({ submitAnswers, score, user, test }) => {
  useEffect(() => submitAnswers(score, user, test), []);
  return (
    <div>
      <Title title={"Congratulations!"} />
      <h1>You have completed the {test.name}!</h1>
      <h3>
        Your test results have been saved so you can safely close the tab.
      </h3>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    test: state.test,
    score: state.score,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitAnswers(score, user, test) {
      dispatch(
        mutations.submitAnswers({
          score,
          user,
          test,
        })
      );
    },
  };
}

export const ConnectedFinished = connect(
  mapStateToProps,
  mapDispatchToProps
)(Finished);
