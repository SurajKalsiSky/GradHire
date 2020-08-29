export const REQUEST_TEST_CREATION = "REQUEST_TEST_CREATION";
export const CREATE_TEST = "CREATE_TEST";
export const REQUEST_GENERATE_TEST_UAC = "REQUEST_GENERATE_TEST_UAC";
export const GENERATE_TEST_UAC = "GENERATE_TEST_UAC";
export const SET_TEST_NAME = "SET_TEST_NAME";

export const requestTestCreation = (userId) => ({
  type: REQUEST_TEST_CREATION,
  userId,
});

export const createTest = (testId, userId) => ({
  type: CREATE_TEST,
  testId,
  userId,
});

export const requestGenerateUAC = (testId) => ({
  type: REQUEST_GENERATE_TEST_UAC,
  testId,
});

export const generateUAC = (testId, UAC) => ({
  type: GENERATE_TEST_UAC,
  testId,
  UAC,
});

export const setTestName = (testId, name) => ({
  type: SET_TEST_NAME,
  testId,
  name,
});
