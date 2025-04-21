import { wheaterApi } from "../config/weather";

export class WeatherService {
  async execute(city: string): Promise<number> {
    try {
      const response = await wheaterApi.get("/weather", {
        params: { q: city },
      });
      return response.data.main.temp;
    } catch (error) {
      console.error("Erro ao buscar a temperatura:", error);
      throw new Error("Erro ao buscar a temperatura");
    }
  }
}
