import { addNewTest, updateTest } from "./server";

(async function myFunc() {
  await addNewTest({
    name: "test the test 123",
    id: 555,
  });

  await updateTest({
    name: "test the test Updated!!!",
    id: 555,
  });
})();
