import { v4 as uuid } from "uuid";
import md5 from "md5";
import { connectDB } from "./connect-db";

const authenticationTokens = [];

async function assembleUserState(user) {
  let db = await connectDB();

  let tests = await db.collection("tests").find({ userId: user.id }).toArray();

  return {
    tests,
    user,
    session: { authenticated: "AUTHENTICATED", id: user.id },
  };
}

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection("user");

    let user = await collection.findOne({ name: username });

    if (!user) {
      return res.status(500).send("User not found!");
    }

    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      return res.status(500).send("Incorrect password!");
    }

    let token = uuid();

    authenticationTokens.push({
      token,
      userId: user.id,
    });

    let state = await assembleUserState(user);

    res.send({ token, state });
  });

  app.post("/user/create", async (req, res) => {
    let {
      username,
      password,
      firstname,
      lastname,
      company,
      companylogo,
      companycolour,
      candidate,
    } = req.body;
    let db = await connectDB();
    let collection = db.collection(`user`);
    let user = await collection.findOne({ name: username });
    if (user) {
      res
        .status(500)
        .send({ message: "A user with that account name already exists." });
      return;
    }

    let userId = uuid();

    await collection.insertOne({
      name: username,
      id: userId,
      passwordHash: md5(password),
      firstname,
      lastname,
      company,
      companylogo,
      companycolour,
      candidate,
    });

    let state = await assembleUserState({
      id: userId,
      name: username,
      firstname,
      lastname,
      company,
      companylogo,
      companycolour,
      candidate,
    });

    res.status(200).send({ userId, state });
  });
};
