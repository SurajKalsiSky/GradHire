import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import { v4 as uuid } from "uuid";

export function* taskCreationSaga() {
  while (true) {
    const { userId } = yield take(mutations.REQUEST_TEST_CREATION);
    const testId = uuid();
    yield put(mutations.createTest(testId, userId));
    console.log("function*taskCreationSaga -> userId", userId);
  }
}
