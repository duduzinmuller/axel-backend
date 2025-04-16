import { Request } from "express";
import { EmailAlreadyInUseError, UserNotFoundError } from "../../errors/user";
import { updateUserSchema } from "../../schemas/user";
import { UpdateUserUseCase } from "../../use-cases/user/update-user";
import { badRequest, ok, serverError } from "../helpers/http";
import { userNotFoundResponse } from "../helpers/user";
import { checkIfIdIsValid, invalidIdResponse } from "../helpers/validation";
import { ZodError } from "zod";

export class UpdateUserController {
  updateUserUseCase: UpdateUserUseCase;
  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }
  async execute(httpRequest: Request) {
    try {
      const userId = httpRequest.params?.userId;

      const isIdValid = checkIfIdIsValid(userId);

      if (!isIdValid) {
        return invalidIdResponse("Este id e invalido");
      }

      const params = httpRequest.body;

      await updateUserSchema.parseAsync(params);

      const result = await this.updateUserUseCase.execute(userId, params);

      return ok(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }

      if (error instanceof EmailAlreadyInUseError) {
        return badRequest(error.message);
      }

      if (error instanceof UserNotFoundError) {
        return userNotFoundResponse("Usuario não encontrado");
      }
      console.error(error);
      return serverError();
    }
  }
}
