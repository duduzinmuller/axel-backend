import axios from "axios";
import { app } from "../app";

export const wheaterApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: process.env.OPENWEATHER_API_KEY,
    units: "metric",
  },
});
