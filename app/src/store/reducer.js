import { combineReducers } from "redux";
import * as mutations from "./mutations";

export const reducer = combineReducers({
  session(userSession = {}, action) {
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
        return [...tests, { ...action.testInfo }];
    }
    return tests;
  },
});
