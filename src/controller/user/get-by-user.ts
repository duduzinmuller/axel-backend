import { HttpRequest } from "../../types/httpRequest";
import { User } from "../../types/user";
import { GetByUserUseCase } from "../../use-cases/user/get-by-user";
import { ok, serverError } from "../helpers/http";

export class GetByUserController {
  constructor(private getByUserUseCase: GetByUserUseCase) {
    this.getByUserUseCase = getByUserUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.params;

      const getUsers = await this.getByUserUseCase.execute(params as User);

      return ok(getUsers);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
