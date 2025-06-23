import { GetPaymentStatusUseCase } from "../../use-cases/payment/get-payment-status";
import { HttpRequest } from "../../types/httpRequest";
import { ok, badRequest, serverError } from "../helpers/http";
import { PaymentIdError } from "../../errors/payment";

export class GetPaymentStatusController {
  constructor(private getPaymentStatusUseCase: GetPaymentStatusUseCase) {
    this.getPaymentStatusUseCase = getPaymentStatusUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const paymentId = httpRequest.params?.paymentId;
      if (!paymentId) {
        return badRequest("paymentId é obrigatório");
      }
      const result = await this.getPaymentStatusUseCase.execute(paymentId);
      return ok(result);
    } catch (error) {
      if (error instanceof PaymentIdError) {
        return badRequest(error.message);
      }
      return serverError();
    }
  }
}
