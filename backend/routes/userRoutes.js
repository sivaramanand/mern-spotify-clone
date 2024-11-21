import express from "express";
import dontenv from "dotenv";
import {
  loginUser,
  registerUser,
  myProfile,
  logout,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", isAuth, myProfile);
userRouter.post("/logout", logout);

export default userRouter;
