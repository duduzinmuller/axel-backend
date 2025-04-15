import { checkIfIdIsValid, invalidIdResponse } from "../helpers/validation";
import { GetUserByIdUseCase } from "../../use-cases/user/get-user-by-id";
import { notFound, ok, serverError } from "../helpers/http";

export class GetUserByIdController {
  getUserByIdUseCase: GetUserByIdUseCase;
  constructor(getUserByIdUseCase: GetUserByIdUseCase) {
    this.getUserByIdUseCase = getUserByIdUseCase;
  }
  async execute(httpRequest: any) {
    try {
      const params = httpRequest.params?.userId;

      const isIdValid = checkIfIdIsValid(params);

      if (!isIdValid) {
        return invalidIdResponse("Este ID e invalído.");
      }

      const user = await this.getUserByIdUseCase.execute(
        httpRequest.params.userId,
      );

      if (user === null || user === undefined) {
        return notFound("Usuario não encontrado");
      }

      return ok(user);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
