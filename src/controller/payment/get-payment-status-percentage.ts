import { HttpRequest } from "../../types/httpRequest";
import { GetPaymentStatusPercentageUseCase } from "../../use-cases/payment/get-payment-status-percentage";
import { ok, serverError } from "../helpers/http";

export class GetPaymentStatusPercentageController {
  constructor(
    private getPaymentStatusPercentageUseCase: GetPaymentStatusPercentageUseCase,
  ) {
    this.getPaymentStatusPercentageUseCase = getPaymentStatusPercentageUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const statusPercentages =
        await this.getPaymentStatusPercentageUseCase.execute();

      return ok(statusPercentages);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
