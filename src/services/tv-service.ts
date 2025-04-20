import axios from "axios";

export class TvService {
  private tvIp: string;
  private apiKey: string;

  constructor(tvIp: string, apiKey: string) {
    this.tvIp = tvIp;
    this.apiKey = apiKey;
  }

  async turnOn() {
    try {
      const response = await axios.post(
        `http://${this.tvIp}/api/power/on`,
        null,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Erro ao ligar a TV: ${error.message}`);
      }
      throw new Error("Erro ao ligar a TV: Erro desconhecido");
    }
  }

  async turnOff() {
    try {
      const response = await axios.post(
        `http://${this.tvIp}/api/power/off`,
        null,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Erro ao desligar a TV: ${error.message}`);
      }
      throw new Error("Erro ao desligar a TV: Erro desconhecido");
    }
  }
}
