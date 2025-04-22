import { WeatherService } from "../../services/weather-service";
import { ok, badRequest, serverError } from "../helpers/http";

export class WeatherController {
  wheatherService: WeatherService;
  constructor(weatherService: WeatherService) {
    this.wheatherService = weatherService;
  }

  async execute(httpRequest: any) {
    try {
      const { city } = httpRequest.query;

      if (!city) {
        return badRequest("O nome da cidade é obrigatório");
      }
      const weatherData = await this.wheatherService.execute(city);
      return ok(weatherData);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
