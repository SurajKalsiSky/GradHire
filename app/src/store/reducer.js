import { combineReducers } from "redux";
import * as mutations from "./mutations";
import { defaultState } from "../server/defaultState";

// let defaultState = {
//   session: {},
//   comments: [],
//   users: [],
//   groups: [],
//   tasks: [],
// };

export const reducer = combineReducers({
  session(userSession = defaultState.session || {}, action) {
    let { type, authenticated } = action;
    switch (type) {
      case mutations.SET_STATE:
        return { ...userSession, id: action.state.session.id };
      case mutations.REQUEST_AUTHENTICATE_USER:
        return { ...userSession, authenticated: mutations.AUTHENTICATING };
      case mutations.PROCESSING_AUTHENTICATE_USER:
        return { ...userSession, authenticated };
      default:
        return userSession;
    }
  },
  comments: (comments = defaultState.comments, action) => {
    // switch (action.type) {
    //   case mutations.ADD_TASK_COMMENT:
    //     let { type, owner, task, content, id } = action;
    //     return [...comments, { owner, task, content, id }];
    //   case mutations.SET_STATE:
    //     return action.state.comments;
    // }
    return comments;
  },
  user: (user = {}, action) => {
    switch (action.type) {
      case mutations.SET_STATE:
        return action.state.user;
    }
    return user;
  },
  tests(tests = [], action) {
    switch (action.type) {
      case mutations.SET_STATE:
        return action.state.tests;
      //   case mutations.SET_TASK_COMPLETE:
      //     return tasks.map((task) => {
      //       return task.id === action.taskID
      //         ? { ...task, isComplete: action.isComplete }
      //         : task;
      //     });
      case mutations.GENERATE_TEST_UAC:
        return tests.map((test) => {
          return test.id === action.testId
            ? { ...test, UAC: action.UAC }
            : test;
        });
      case mutations.SET_TEST_NAME:
        return tests.map((test) => {
          return test.id === action.testId
            ? { ...test, name: action.name }
            : test;
        });
      case mutations.CREATE_TEST:
        return [
          ...tests,
          {
            id: action.testId,
            name: "New Task",
            userId: action.userId,
          },
        ];
    }
    return tests;
  },
});
