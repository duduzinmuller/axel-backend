import axios from "axios";

export const facebookApi = axios.create({
  baseURL: "https://graph.facebook.com/v16.0",
});
