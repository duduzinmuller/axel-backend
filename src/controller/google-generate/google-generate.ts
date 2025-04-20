import { GoogleGenerateService } from "../../services/google-generate";
import { badRequest, ok, serverError } from "../helpers/http";

export class GoogleGenerateController {
  googleGenerateService: GoogleGenerateService;

  constructor(googleGenerateService: GoogleGenerateService) {
    this.googleGenerateService = googleGenerateService;
  }

  async execute(httpRequest: any) {
    try {
      const { question } = httpRequest.body;

      if (!question) {
        return badRequest("Pergunta é obrigatória");
      }

      const response = await this.googleGenerateService.execute(question);

      return ok(response);
    } catch (error) {
      console.error(error);
      return serverError("Erro ao gerar conteúdo");
    }
  }
}
