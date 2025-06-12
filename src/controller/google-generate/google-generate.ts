import { GoogleGenerateService } from "../../services/google-generate";
import { HttpRequest } from "../../types/httpRequest";
import { badRequest, ok, serverError } from "../helpers/http";

export class GoogleGenerateController {
  constructor(private googleGenerateService: GoogleGenerateService) {
    this.googleGenerateService = googleGenerateService;
  }

  async execute(httpRequest: HttpRequest) {
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
