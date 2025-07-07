import { HttpRequest } from "../../types/httpRequest";
import { GetByUserStatusUseCase } from "../../use-cases/user/get-by-user-status";
import { ok, serverError } from "../helpers/http";

export class GetByUserStatusController {
  constructor(private getByUserStatusUseCase: GetByUserStatusUseCase) {
    this.getByUserStatusUseCase = getByUserStatusUseCase;
  }
  async execute(httpRequest: HttpRequest) {
    try {
      const statusUser = await this.getByUserStatusUseCase.execute();

      return ok(statusUser);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
