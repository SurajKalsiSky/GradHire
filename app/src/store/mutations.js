export const REQUEST_TEST_CREATION = "REQUEST_TEST_CREATION";
export const CREATE_TEST = "CREATE_TEST";

export const requestTestCreation = (userId) => ({
  type: REQUEST_TEST_CREATION,
  userId,
});

export const createTest = (testId, userId) => ({
  type: CREATE_TEST,
  testId,
  userId,
});
