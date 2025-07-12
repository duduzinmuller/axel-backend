import {
  AdminUnauthorizedError,
  CannotDeleteOtherAdminsError,
  CannotDeleteOwnAccountError,
} from "../../errors/admin";
import { HttpRequest } from "../../types/httpRequest";
import { DeleteUserManagementUseCase } from "../../use-cases/admin/delete-user-management";
import { badRequest, notFound, serverError } from "../helpers/http";

export class DeleteUserManagementController {
  constructor(
    private deleteUserManagementUseCase: DeleteUserManagementUseCase,
  ) {
    this.deleteUserManagementUseCase = deleteUserManagementUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const userId = httpRequest.params?.userId;
      const adminId = httpRequest.user?.id;

      if (!userId) {
        return badRequest("ID do usuário é obrigatório.");
      }

      if (!adminId) {
        return notFound("Usuário não autenticado.");
      }

      const user = await this.deleteUserManagementUseCase.execute(
        userId,
        adminId,
      );

      return user;
    } catch (error) {
      if (error instanceof AdminUnauthorizedError) {
        return badRequest(error.message);
      }
      if (error instanceof CannotDeleteOtherAdminsError) {
        return badRequest(error.message);
      }
      if (error instanceof CannotDeleteOwnAccountError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError();
    }
  }
}
