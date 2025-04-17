import {
  EmailVerificationNotFoundError,
  EmailVerificationExpiredError,
  EmailVerificationInvalidError,
} from "../../errors/email-verification";
import { ValidateVerificationCodeUseCase } from "../../use-cases/email-verification/validate-verification-code";
import { badRequest, ok, serverError } from "../helpers/http";

export class ValidateVerificationCodeController {
  validateVerificationCodeUseCase: ValidateVerificationCodeUseCase;

  constructor(
    validateVerificationCodeUseCase: ValidateVerificationCodeUseCase,
  ) {
    this.validateVerificationCodeUseCase = validateVerificationCodeUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const params = httpRequest.body;
      const userId = httpRequest.params?.userId;

      if (!params) {
        return badRequest("Missing required field: code");
      }

      const emailVerification =
        await this.validateVerificationCodeUseCase.execute({
          ...params,
          userId,
        });

      return ok(emailVerification);
    } catch (error) {
      if (error instanceof EmailVerificationNotFoundError) {
        return badRequest(error.message);
      }
      if (error instanceof EmailVerificationExpiredError) {
        return badRequest(error.message);
      }
      if (error instanceof EmailVerificationInvalidError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError();
    }
  }
}
