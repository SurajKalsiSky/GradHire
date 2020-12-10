import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";
import { authenticationRoute } from "./authenticate";
import "./initialise-db";

let port = 7777;
let app = express();

app.listen(port, console.log("Server listening on port", port));

// app.get("/", (req, res) => {
//   res.send("Hellow world");
// });

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

export const addNewTest = async (test) => {
  let db = await connectDB();
  let collection = db.collection("tests");
  await collection.insertOne(test);
};

export const updateTest = async (test) => {
  let { id, name, UAC, candidates } = test;
  let db = await connectDB();
  let collection = db.collection("tests");

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }

  if (UAC) {
    await collection.updateOne({ id }, { $set: { UAC } });
  }

  if (candidates) {
    let wholeTest = await collection.findOne({ id });
    if (wholeTest.candidates) {
      const newArray = [...wholeTest.candidates, ...candidates];
      await collection.updateOne({ id }, { $set: { candidates: newArray } });
    } else {
      await collection.updateOne({ id }, { $set: { candidates } });
    }
  }
};

app.post("/test/new", async (req, res) => {
  let test = req.body.test;
  await addNewTest(test);
  res.status(200).send();
});

app.post("/test/update", async (req, res) => {
  let test = req.body.test;
  await updateTest(test);
  res.status(200).send();
});

app.post("/gettest", async (req, res) => {
  let id = req.body.id;
  console.log("id to find:", id);
  let db = await connectDB();
  let collection = db.collection("tests");

  let test = await collection.findOne({ id });

  if (!test) {
    return res.status(500).send("Test not found!");
  }

  let state = {
    test,
  };

  res.send({ state });
});
