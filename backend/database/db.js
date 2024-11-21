import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config();

export const connectToDB = async () => {
  try {
    const connectURL = await mongoose.connect(process.env.mongodburl);
    console.log("connected db successfully");
  } catch (err) {
    console.log(err);
    console.log("unsuccess connected db");
  }
};
