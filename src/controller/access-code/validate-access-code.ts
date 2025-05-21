import {
  AccessCodeAlreadyUsedError,
  AccessCodeExpiredError,
  AccessCodeNotFoundError,
} from "../../errors/access-code";
import { ValidateAccessCodeUseCase } from "../../use-cases/access-code/validate-access-code";
import { badRequest, ok, serverError } from "../helpers/http";

export class ValidateAccessCodeController {
  validateAccessCodeUseCase: ValidateAccessCodeUseCase;
  constructor(validateAccessCodeUseCase: ValidateAccessCodeUseCase) {
    this.validateAccessCodeUseCase = validateAccessCodeUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const userId = httpRequest.params?.userId;

      if (!userId) {
        return badRequest("Usuário não autenticado");
      }

      const params = httpRequest.body;

      if (!params.code) {
        return badRequest("Codigo não informado");
      }

      const accessCode = await this.validateAccessCodeUseCase.execute(
        userId,
        params.code,
      );

      return ok(accessCode);
    } catch (error) {
      if (error instanceof AccessCodeNotFoundError) {
        return badRequest(error.message);
      }
      if (error instanceof AccessCodeExpiredError) {
        return badRequest(error.message);
      }
      if (error instanceof AccessCodeAlreadyUsedError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError();
    }
  }
}
