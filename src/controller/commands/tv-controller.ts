import { Request, Response } from "express";
import { TVService } from "../../services/tv-service";
import { serverError, badRequest, ok } from "../helpers/http";

export class TVController {
  tvService: TVService;

  constructor(tvService: TVService) {
    this.tvService = tvService;
  }

  async scan(req: Request, res: Response) {
    try {
      const tvs = await this.tvService.discoverTVs();
      return ok(tvs);
    } catch (error) {
      console.error("Erro na varredura de TVs:", error);
      return serverError();
    }
  }

  async control(req: Request, res: Response) {
    try {
      const { ip, command } = req.body;

      if (!ip || !command) {
        return badRequest("ip e command são obrigatórios");
      }

      const success = await this.tvService.sendCommand(ip, command);

      if (success) {
        return ok("Comando enviado com sucesso");
      } else {
        return serverError();
      }
    } catch (error) {
      console.error("Erro ao controlar TV:", error);
      return serverError();
    }
  }
}
