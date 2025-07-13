import { HttpRequest } from "../../types/httpRequest";
import { CheckExpiringPlansUseCase } from "../../use-cases/user/check-expiring-plans";
import { ok, serverError } from "../helpers/http";

export class CheckExpiringPlansController {
  constructor(private checkExpiringPlansUseCase: CheckExpiringPlansUseCase) {
    this.checkExpiringPlansUseCase = checkExpiringPlansUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const result = await this.checkExpiringPlansUseCase.execute();

      return ok(result);
    } catch (error) {
      console.error("Erro ao verificar planos expirando:", error);
      return serverError();
    }
  }
}
