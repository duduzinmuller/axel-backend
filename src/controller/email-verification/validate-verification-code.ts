import {
  EmailVerificationNotFoundError,
  EmailVerificationExpiredError,
  EmailVerificationInvalidError,
} from "../../errors/email-verification";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { HttpRequest } from "../../types/httpRequest";
import { ValidateVerificationCodeUseCase } from "../../use-cases/email-verification/validate-verification-code";
import { badRequest, ok, serverError } from "../helpers/http";

export class ValidateVerificationCodeController {
  validateVerificationCodeUseCase: ValidateVerificationCodeUseCase;
  createUserRepository: CreateUserRepository;

  constructor(
    validateVerificationCodeUseCase: ValidateVerificationCodeUseCase,
    createUserRepository: CreateUserRepository,
  ) {
    this.validateVerificationCodeUseCase = validateVerificationCodeUseCase;
    this.createUserRepository = createUserRepository;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.body;

      if (!params) {
        return badRequest("Missing required field: code");
      }

      const emailVerification =
        await this.validateVerificationCodeUseCase.execute(params);

      await this.createUserRepository.verifyUserEmail(emailVerification.userId);

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
