import { AccessCode } from "../../types/access-code";
import { HttpRequest } from "../../types/httpRequest";
import { GetAccessCodeUseCase } from "../../use-cases/access-code/get-access-code";
import { badRequest, ok, serverError } from "../helpers/http";

export class GetAccessCodeController {
  constructor(private getAccessCodeUseCase: GetAccessCodeUseCase) {
    this.getAccessCodeUseCase = getAccessCodeUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.params;

      if (!params) {
        return badRequest("Erro ao buscar os codigos de acesso.");
      }
      const getCode = await this.getAccessCodeUseCase.execute(
        params as AccessCode,
      );

      return ok(getCode);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
