import { ZodError } from "zod";
import { LoginUserUseCase } from "../../use-cases/user/login-user";
import { badRequest, ok, serverError, unauthorized } from "../helpers/http";
import { userNotFoundResponse } from "../helpers/user";
import {
  EmailNotVerifiedError,
  InvalidPasswordError,
  UserNotFoundError,
} from "../../errors/user";
import { loginSchema } from "../../schemas/user/user";
import { User } from "../../types/user";
import { Request } from "express";

export class LoginUserController {
  loginUserUseCase: LoginUserUseCase;
  constructor(loginUserUseCase: LoginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async execute(httpRequest: Request) {
    try {
      const params = httpRequest.body;

      await loginSchema.parseAsync(params);

      const user = await this.loginUserUseCase.execute(
        params.email,
        params.password,
      );

      return ok(user);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }

      if (error instanceof InvalidPasswordError) {
        return unauthorized("Senha incorreta");
      }

      if (error instanceof UserNotFoundError) {
        return userNotFoundResponse("Usuario não encontrado");
      }

      if (error instanceof EmailNotVerifiedError) {
        return badRequest(error.message);
      }

      console.error(error);
      return serverError();
    }
  }
}
