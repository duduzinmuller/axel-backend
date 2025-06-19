import { GoogleGenerateService } from "../../services/google-generate";
import { HttpRequest } from "../../types/httpRequest";
import { badRequest, ok, serverError, unauthorized } from "../helpers/http";
import { CheckAndIncrementUsageUseCase } from "../../use-cases/message-usage/check-and-increment-usage";
import {
  MessageLimitExceededError,
  UserPlanNotFoundError,
} from "../../errors/message-usage";

export class GoogleGenerateController {
  constructor(
    private googleGenerateService: GoogleGenerateService,
    private checkAndIncrementUsageUseCase: CheckAndIncrementUsageUseCase,
  ) {
    this.googleGenerateService = googleGenerateService;
    this.checkAndIncrementUsageUseCase = checkAndIncrementUsageUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const { question } = httpRequest.body;
      const userId = httpRequest.userId;

      if (!userId) {
        return unauthorized("Usuário não autenticado");
      }

      if (!question) {
        return badRequest("Pergunta é obrigatória");
      }

      const usageInfo =
        await this.checkAndIncrementUsageUseCase.execute(userId);

      const response = await this.googleGenerateService.execute(question);

      return ok({
        ...response,
        usage: usageInfo,
      });
    } catch (error) {
      if (error instanceof MessageLimitExceededError) {
        return badRequest(error.message);
      }
      if (error instanceof UserPlanNotFoundError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError("Erro ao gerar conteúdo");
    }
  }
}
