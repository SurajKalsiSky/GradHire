import { take, put } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";
import { history } from "./history";

const url = "http://localhost:7777";

export function* testCreationSaga() {
  while (true) {
    const testInfo = yield take(mutations.REQUEST_TEST_CREATION);
    console.log("function*testCreationSaga -> testInfo", testInfo);
    delete testInfo.type;
    const test = {
      testInfo,
      userId: testInfo.userId,
      id: uuid(),
      name: testInfo.ownerState.name,
      candidates: [],
    };
    yield put(mutations.createTest(test));
    const { res } = yield axios.post(url + "/test/new", {
      test,
    });
    history.push("/test-list");
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
  }
}

export function* testSubmitAnswerSaga() {
  while (true) {
    const answerDetails = yield take("submitAnswer");
    console.log(
      "function*testSubmitAnswerSaga -> answerDetails",
      answerDetails
    );
    if (answerDetails.nextTest) {
      history.push(`/question/${answerDetails.nextId}`);
    } else {
      history.push(`/finished`);
    }
  }
}

export function* testSubmitAnswersSaga() {
  while (true) {
    const { score, user, test } = yield take("submitAnswers");
    const candidates = [
      {
        score,
        ...user,
      },
    ];
    console.log("function*testSubmitAnswersSaga -> candidates", candidates);
    axios.post(url + "/test/update", {
      test: {
        id: test.id,
        candidates,
      },
    });
  }
}

export function* generateUACSaga() {
  while (true) {
    const { testId } = yield take(mutations.REQUEST_GENERATE_TEST_UAC);
    const UAC = uuid().substring(0, 6);
    yield put(mutations.generateUAC(testId, UAC));
    axios.post(url + "/test/update", {
      test: {
        id: testId,
        UAC,
      },
    });
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
      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
      if (data.state.user.candidate) {
        history.push("/question/0");
      } else {
        history.push("/home");
      }
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
    try {
      const { data } = yield axios.post(url + `/user/create`, signUpInfo);

      yield put(
        mutations.setState({ ...data.state, session: { id: data.userId } })
      );
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

      if (signUpInfo.candidate) {
        history.push("/question/0");
      } else {
        history.push("/home");
      }
    } catch (e) {
      console.error("Error", e);
      yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
    }
  }
}

export function* getTest() {
  while (true) {
    const { id } = yield take("GET_TEST");
    try {
      const { data } = yield axios.post(url + "/gettest", {
        id,
      });
      if (!data) {
        throw new Error();
      }
      console.log("Found test!", data);
      yield put(mutations.setTestState(data.state));
    } catch (e) {
      console.log("Invalid test", e);
      yield put(
        mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED, {
          candidate: "NO_TEST",
        })
      );
    }
  }
}

// export function* checkUAC() {
//   while (true) {
//     const { UAC } = yield take("checkUAC");
//     const UAC = uuid().substring(0, 6);
//     yield put(mutations.generateUAC(testId, UAC));
//     axios.post(url + "/test/update", {
//       test: {
//         id: testId,
//         UAC,
//       },
//     });
//   }
// }
