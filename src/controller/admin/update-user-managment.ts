import {
  AdminUnauthorizedError,
  CannotEditOtherAdminsError,
} from "../../errors/admin";
import { UserNotFoundError } from "../../errors/user";
import { HttpRequest } from "../../types/httpRequest";
import { UpdateUserManagmentUseCase } from "../../use-cases/admin/update-user-managment";

import { badRequest, notFound, ok, serverError } from "../helpers/http";
import { checkIfIdIsValid, invalidIdResponse } from "../helpers/validation";
import { ZodError } from "zod";

export class UpdateUserManagmentController {
  constructor(private updateManagmentUseCase: UpdateUserManagmentUseCase) {
    this.updateManagmentUseCase = updateManagmentUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const userId = httpRequest.params?.userId;
      const adminId = httpRequest.user?.id;

      if (!userId) {
        return invalidIdResponse("O ID do usuário é obrigatório.");
      }

      if (!adminId) {
        return notFound("Usuário não autenticado.");
      }

      const isIdValid = checkIfIdIsValid(userId);

      if (!isIdValid) {
        return invalidIdResponse("Este id é inválido.");
      }

      if (!httpRequest.body) {
        return badRequest("Requisição sem corpo.");
      }

      const params = httpRequest.body;

      const result = await this.updateManagmentUseCase.execute(
        userId,
        params,
        adminId,
      );

      return ok(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }

      if (error instanceof Error) {
        if (error instanceof AdminUnauthorizedError) {
          return badRequest(error.message);
        }
        if (error instanceof CannotEditOtherAdminsError) {
          return badRequest(error.message);
        }
        if (error instanceof UserNotFoundError) {
          return notFound(error.message);
        }
      }

      console.error(error);
      return serverError();
    }
  }
}
