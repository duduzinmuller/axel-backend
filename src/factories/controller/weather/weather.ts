import { WeatherController } from "../../../controller/weather/weather-controller";
import { WeatherService } from "../../../services/weather-service";

export const makeWeatherController = () => {
  const weatherService = new WeatherService();

  const weatherController = new WeatherController(weatherService);

  return weatherController;
};
