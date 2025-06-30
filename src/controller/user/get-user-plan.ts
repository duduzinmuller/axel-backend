import { HttpRequest } from "../../types/httpRequest";
import { GetUserPlanUseCase } from "../../use-cases/user/get-user-plan";
import { ok, serverError } from "../helpers/http";

export class GetUserPlanController {
  constructor(private getUserPlanUseCase: GetUserPlanUseCase) {
    this.getUserPlanUseCase = getUserPlanUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const planPercentages = await this.getUserPlanUseCase.execute();

      return ok(planPercentages);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
