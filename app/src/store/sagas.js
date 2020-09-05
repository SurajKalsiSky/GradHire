import { take, put, select } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";
import { history } from "./history";

const url = "http://localhost:7777";

export function* testCreationSaga() {
  while (true) {
    const { userId } = yield take(mutations.REQUEST_TEST_CREATION);
    console.log("function*testCreationSaga -> userId", userId);
    const testId = uuid();
    yield put(mutations.createTest(testId, userId));
    const { res } = yield axios.post(url + "/test/new", {
      test: {
        id: testId,
        userId,
        name: "New test from saga",
      },
    });
    console.info("testCreationSaga response:", res);
  }
}

export function* testModificationSaga() {
  while (true) {
    const test = yield take([mutations.SET_TEST_NAME]);
    axios.post(url + "/test/update", {
      test: {
        id: test.testId,
        userId: test.userId,
        name: test.name,
      },
    });
    console.info("testModificationSaga");
  }
}

export function* generateUACSaga() {
  while (true) {
    const { testId } = yield take(mutations.REQUEST_GENERATE_TEST_UAC);
    const UAC = uuid().substring(0, 6);
    yield put(mutations.generateUAC(testId, UAC));
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated!", data);
      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
      history.push("/test-list");
    } catch (e) {
      console.log("Can't authenticate", e);
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
