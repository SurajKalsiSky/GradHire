import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";

let port = 7777;
let app = express();

app.listen(port, console.log("Server listening on port", port));

// app.get("/", (req, res) => {
//   res.send("Hellow world");
// });

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

export const addNewTest = async (test) => {
  let db = await connectDB();
  let collection = db.collection("tests");
  await collection.insertOne(test);
};

export const updateTest = async (test) => {
  let { id, name, UAC } = test;
  let db = await connectDB();
  let collection = db.collection("tests");

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }

  if (UAC) {
    await collection.updateOne({ id }, { $set: { UAC } });
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
