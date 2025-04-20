import SpotifyWebApi from "spotify-web-api-node";
import { spotifyConfig } from "../config/spotify";

const spotifyApi = new SpotifyWebApi(spotifyConfig);

export const login = () => {
  const scopes = ["user-read-playback-state", "user-modify-playback-state"];
  return spotifyApi.createAuthorizeURL(scopes, spotifyConfig.redirectUri!);
};

export const handleCallback = async (code: string) => {
  const data = await spotifyApi.authorizationCodeGrant(code);
  spotifyApi.setAccessToken(data.body["access_token"]);
  spotifyApi.setRefreshToken(data.body["refresh_token"]);
};

export const skipToNext = async () => {
  await spotifyApi.skipToNext();
};
