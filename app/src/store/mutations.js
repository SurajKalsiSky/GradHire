export const REQUEST_TEST_CREATION = "REQUEST_TEST_CREATION";
export const CREATE_TEST = "CREATE_TEST";
export const REQUEST_GENERATE_TEST_UAC = "REQUEST_GENERATE_TEST_UAC";
export const GENERATE_TEST_UAC = "GENERATE_TEST_UAC";
export const SET_TEST_NAME = "SET_TEST_NAME";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;
export const SET_TEST_STATE = `SET_TEST_STATE`;

export const requestTestCreation = (testDetails) => ({
  type: REQUEST_TEST_CREATION,
  ...testDetails,
});

export const createTest = (testInfo) => ({
  type: CREATE_TEST,
  testInfo,
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

export const requestAuthenticateUser = (username, password) => ({
  type: REQUEST_AUTHENTICATE_USER,
  username,
  password,
});

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => ({
  type: PROCESSING_AUTHENTICATE_USER,
  session,
  authenticated: status,
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state,
});

export const setTestState = (state = {}) => ({
  type: SET_TEST_STATE,
  state,
});

export const requestCreateUserAccount = (signUpInfo) => ({
  type: REQUEST_USER_ACCOUNT_CREATION,
  ...signUpInfo,
});

export const getTest = (id) => ({
  type: "GET_TEST",
  id,
});

export const submitAnswer = (answerDetails) => ({
  type: "submitAnswer",
  ...answerDetails,
});

export const submitAnswers = (answerDetails) => ({
  type: "submitAnswers",
  ...answerDetails,
});
