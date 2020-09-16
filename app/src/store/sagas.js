import { take, put, select } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";
import { history } from "./history";

const url = "http://localhost:7777";

export function* testCreationSaga() {
  while (true) {
    const testInfo = yield take(mutations.REQUEST_TEST_CREATION);
    delete testInfo.type;
    console.log("function*testCreationSaga -> testInfo", testInfo);
    const test = {
      testInfo,
      userId: testInfo.userId,
      id: uuid(),
      name: testInfo.ownerState.name,
    };
    yield put(mutations.createTest(test));
    const { res } = yield axios.post(url + "/test/new", {
      test,
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
      history.push("/home");
    } catch (e) {
      console.log("Can't authenticate", e);
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}

export function* userAccountCreationSaga() {
  while (true) {
    const signUpInfo = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
    delete signUpInfo.type;
    console.log("function*userAccountCreationSaga -> signUpInfo", signUpInfo);
    try {
      const { data } = yield axios.post(url + `/user/create`, signUpInfo);
      console.log(data);

      yield put(
        mutations.setState({ ...data.state, session: { id: data.userId } })
      );
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

      history.push("/home");
    } catch (e) {
      console.error("Error", e);
      yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
    }
  }
}
