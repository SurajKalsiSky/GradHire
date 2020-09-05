import md5 from "md5";

export const defaultState = {
  user: [
    {
      id: "1",
      name: "Dev",
      passwordHash: md5("test"),
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
};
