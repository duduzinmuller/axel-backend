import express from "express";
import {
  loginController,
  callbackController,
  nextTrackController,
} from "../../controller/spotify/spotify";
import { auth } from "../../middleware/auth";

export const musicRouter = express.Router();

musicRouter.post("/login", auth, loginController);
musicRouter.get("/callback", auth, callbackController);
musicRouter.post("/next", auth, nextTrackController);
