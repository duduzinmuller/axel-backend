import { EmailVerification } from "../../types/email-verification";
import { HttpRequest } from "../../types/httpRequest";
import { GetEmailVerificationUseCase } from "../../use-cases/email-verification/get-email-verification";
import { badRequest, ok, serverError } from "../helpers/http";

export class GetEmailVerificationController {
  constructor(
    private getEmailVerificationUseCase: GetEmailVerificationUseCase,
  ) {
    this.getEmailVerificationUseCase = getEmailVerificationUseCase;
  }
  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.params;

      if (!params) {
        return badRequest("Erro ao buscar os emails de verificação");
      }

      const emailVerification = await this.getEmailVerificationUseCase.execute(
        params as EmailVerification,
      );

      return ok(emailVerification);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
