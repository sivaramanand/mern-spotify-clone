import express from "express";
import dotenv from "dotenv";
import {connectToDB} from "./database/db.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import path from "path";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;

import userRoutes from "./routes/userRoutes.js";
import songRoutes from "./routes/songRoutes.js";

app.use("/api/user", userRoutes);
app.use("/api/song", songRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

console.log("environment jwt secret", process.env.Jwt_Secret)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectToDB();
});
