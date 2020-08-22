export const defaultState = {
  session: {},
  user: {
    id: "1",
    name: "Dev",
  },
  tests: [
    {
      id: "G1",
      name: "To Do",
      owner: "U1",
    },
  ],
  tasks: [
    {
      id: "T1",
      name: "Do tests",
      group: "G1",
      owner: "U1",
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
