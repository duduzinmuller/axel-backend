import { HttpRequest } from "../../types/httpRequest";
import { GetPaymentHistoryUseCase } from "../../use-cases/payment/get-payment-history";
import { ok, serverError } from "../helpers/http";

export class GetPaymentHistoryController {
  constructor(private getPaymentHistoryUseCase: GetPaymentHistoryUseCase) {
    this.getPaymentHistoryUseCase = getPaymentHistoryUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const payments = await this.getPaymentHistoryUseCase.execute();
      return ok(payments);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
