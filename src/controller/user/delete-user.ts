import { UserNotFoundError } from "../../errors/user";
import { DeleteUserUseCase } from "../../use-cases/user/delete-user";
import { ok, serverError } from "../helpers/http";
import { userNotFoundResponse } from "../helpers/user";
import { checkIfIdIsValid, invalidIdResponse } from "../helpers/validation";

export class DeleteUserController {
  deleteUserUseCase: DeleteUserUseCase;
  constructor(deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase;
  }
  async execute(httpRequest: any) {
    try {
      const userId = httpRequest.params?.userId;

      if (!userId) {
        return invalidIdResponse("O ID do usuário é obrigatório.");
      }

      const idIsValid = checkIfIdIsValid(userId);

      if (!idIsValid) {
        return invalidIdResponse("Este id e invalido");
      }

      const result = await this.deleteUserUseCase.execute(userId);

      return ok(result);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return userNotFoundResponse("Usuario não encontrado");
      }
      console.error(error);
      return serverError();
    }
  }
}
