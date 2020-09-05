import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import { v4 as uuid } from "uuid";

export function* testCreationSaga() {
  while (true) {
    const { userId } = yield take(mutations.REQUEST_TEST_CREATION);
    const testId = uuid();
    yield put(mutations.createTest(testId, userId));
  }
}

export function* generateUACSaga() {
  while (true) {
    const { testId } = yield take(mutations.REQUEST_GENERATE_TEST_UAC);
    const UAC = uuid().substring(0, 6);
    yield put(mutations.generateUAC(testId, UAC));
  }
}
