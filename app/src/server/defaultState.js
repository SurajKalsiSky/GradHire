import md5 from "md5";

export const defaultState = {
  user: [
    {
      id: "1",
      name: "Dev",
      passwordHash: md5("testpassword"),
    },
  ],
  tests: [
    {
      id: "G1",
      name: "To Do",
      owner: "1",
    },
    {
      id: "G1",
      name: "To Do2",
      owner: "1",
    },
    {
      id: "G1",
      name: "To Do3",
      owner: "2",
    },
  ],
  tasks: [
    {
      id: "T1",
      name: "Do tests",
      group: "G1",
      owner: "1",
      isComplete: false,
    },
  ],
  comments: [
    {
      id: "C1",
      owner: "U1",
      task: "T1",
      content: "Great Work!",
    },
  ],
};
