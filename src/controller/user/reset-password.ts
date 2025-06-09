import { ResetPasswordUseCase } from "../../use-cases/user/reset-password";
import { badRequest, ok, serverError } from "../helpers/http";
import {
  ResetPasswordTokenExpiredError,
  ResetPasswordTokenNotFoundError,
} from "../../errors/reset-password";
import { HttpRequest } from "../../types/httpRequest";

export class ResetPasswordController {
  resetPasswordUseCase: ResetPasswordUseCase;

  constructor(resetPasswordUseCase: ResetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const { token, newPassword } = httpRequest.body;

      const result = await this.resetPasswordUseCase.execute({
        token,
        newPassword,
      });

      return ok(result);
    } catch (error) {
      console.error(error);
      if (error instanceof ResetPasswordTokenExpiredError) {
        return badRequest(error.message);
      }
      if (error instanceof ResetPasswordTokenNotFoundError) {
        return badRequest(error.message);
      }
      return serverError();
    }
  }
}
