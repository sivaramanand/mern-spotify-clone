import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import uploadFile from "../middlewares/multer.js";
import { createAlbum } from "../controllers/songController.js";
const songRouter = express.Router();

songRouter.post("/album/new", isAuth, uploadFile, createAlbum);
export default songRouter;
