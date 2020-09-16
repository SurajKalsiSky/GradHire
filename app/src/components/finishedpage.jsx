import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const Finished = ({ submitAnswers, score, user, test }) => {
  useEffect(() => submitAnswers(score, user, test), []);
  return (
    <div>
      <h2>Finished</h2>
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
