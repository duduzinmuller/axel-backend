import express from "express";
import {
  callbackController,
  nextTrackController,
} from "../../controller/spotify/spotify";
import { auth } from "../../middleware/auth";

export const musicRouter = express.Router();

musicRouter.get("/login", (req, res) => {
  const spotifyLoginUrl = "https://accounts.spotify.com/login";
  res.redirect(spotifyLoginUrl);
});

musicRouter.get("/callback", callbackController);
musicRouter.post("/next", auth, nextTrackController);
