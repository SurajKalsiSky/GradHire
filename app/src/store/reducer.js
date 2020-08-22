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
  session(userSession = defaultState.session, action) {
    let { type, authenticated, session } = action;
    switch (type) {
      //   case mutations.SET_STATE:
      //     return { ...userSession, id: action.state.session.id };
      //   case mutations.REQUEST_AUTHENTICATE_USER:
      //     return { ...userSession, authenticated: mutations.AUTHENTICATING };
      //   case mutations.PROCESSING_AUTHENTICATE_USER:
      //     return { ...userSession, authenticated };
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
  user: (user = defaultState.user, action) => {
    // switch (action.type) {
    //   case mutations.SET_STATE:
    //     return action.state.users;
    // }
    return user;
  },
  tests(tests = defaultState.tests, action) {
    switch (action.type) {
      //   case mutations.SET_STATE:
      //     return action.state.tasks;
      //   case mutations.SET_TASK_COMPLETE:
      //     return tasks.map((task) => {
      //       return task.id === action.taskID
      //         ? { ...task, isComplete: action.isComplete }
      //         : task;
      //     });
      //   case mutations.SET_TASK_GROUP:
      //     return tasks.map((task) => {
      //       return task.id === action.taskID
      //         ? { ...task, group: action.groupID }
      //         : task;
      //     });
      //   case mutations.SET_TASK_NAME:
      //     return tasks.map((task) => {
      //       return task.id === action.taskID
      //         ? { ...task, name: action.name }
      //         : task;
      //     });
      case mutations.CREATE_TEST:
        return [
          ...tests,
          {
            id: action.taskID,
            name: "New Task",
            testId: action.testId,
            userId: action.userId,
          },
        ];
    }
    return tests;
  },
});
