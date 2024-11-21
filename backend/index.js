import express from "express";
import dontenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connectToDB } from "./database/db.js";

dontenv.config();
const app = express();
const port = process.env.PORT;
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server running at ${port}`);
  connectToDB();
});
