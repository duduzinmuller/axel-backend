import { TvService } from "../../services/tv-service";
import { ok, serverError, badRequest } from "../helpers/http";

export class TvController {
  async turnOn(httpRequest: any) {
    try {
      const { tvIp, apiKey } = httpRequest.body;
      const tvService = new TvService(tvIp, apiKey);
      if (!tvIp || !apiKey) {
        return badRequest("TV IP e API Key são obrigatórios");
      }
      const result = await tvService.turnOn();
      return ok(result);
    } catch (error) {
      console.error("Erro ao ligar a TV:", error);
      return serverError();
    }
  }

  async turnOff(httpRequest: any) {
    try {
      const { tvIp, apiKey } = httpRequest.body;
      const tvService = new TvService(tvIp, apiKey);
      if (!tvIp || !apiKey) {
        return badRequest("TV IP e API Key são obrigatórios");
      }
      const result = await tvService.turnOff();
      return ok(result);
    } catch (error) {
      console.error("Erro ao desligar a TV:", error);
      return serverError();
    }
  }
}
