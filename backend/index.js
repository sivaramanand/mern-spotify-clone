import express from "express";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import songRouter from "./routes/songRoutes.js";
import { connectToDB } from "./database/db.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.apiKey,
  api_secret: process.env.apiSecret,
});
const app = express();
app.use(express.json());
dontenv.config();
app.use(cookieParser());

const port = process.env.PORT;
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server running at ${port}`);
  connectToDB();
});
