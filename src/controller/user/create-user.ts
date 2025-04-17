import { CreateUserSchema } from "../../schemas/user/user";
import { ZodError } from "zod";
import { CreateUserUseCase } from "../../use-cases/user/create-user";
import { badRequest, created, serverError } from "../helpers/http";
import { EmailAlreadyInUseError } from "../../errors/user";
import { Request } from "express";

export class CreateUserController {
  createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async execute(httpRequest: Request) {
    try {
      const params = httpRequest.body;

      await CreateUserSchema.parseAsync(params);

      const result = await this.createUserUseCase.execute(params);

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
