import { defaultState } from "./defaultState";
import { connectDB } from "./connect-db";

async function initialiseDB() {
  try {
    let db = await connectDB();
    for (let collectionName in defaultState) {
      let collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
    }
  } catch (err) {
    console.log("Failed to initialise database!", err);
  }
}

initialiseDB();
