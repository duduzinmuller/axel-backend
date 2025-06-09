import { CreateUserSchema } from "../../schemas/user/user";
import { ZodError } from "zod";
import { CreateUserUseCase } from "../../use-cases/user/create-user";
import { badRequest, created, serverError } from "../helpers/http";
import { EmailAlreadyInUseError } from "../../errors/user";
import { Request } from "express";
import { CreateVerificationUseCase } from "../../use-cases/email-verification/email-verification";
import { HttpRequest } from "../../types/httpRequest";

export class CreateUserController {
  createUserUseCase: CreateUserUseCase;
  createVerificationUseCase: CreateVerificationUseCase;
  constructor(
    createUserUseCase: CreateUserUseCase,
    createVerificationUseCase: CreateVerificationUseCase,
  ) {
    this.createUserUseCase = createUserUseCase;
    this.createVerificationUseCase = createVerificationUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.body;

      await CreateUserSchema.parseAsync(params);

      const result = await this.createUserUseCase.execute(params);

      await this.createVerificationUseCase.execute(result.email);

      return created(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }
      if (error instanceof EmailAlreadyInUseError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError();
    }
  }
}
