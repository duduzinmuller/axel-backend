import { PaymentError } from "../../errors/payment";
import { HttpRequest } from "../../types/httpRequest";
import { UpdatePaymentUseCase } from "../../use-cases/payment/update-payment";
import { badRequest, ok, serverError } from "../helpers/http";

export class UpdatePaymentController {
  updatePaymentUseCase: UpdatePaymentUseCase;

  constructor(updatePaymentUseCase: UpdatePaymentUseCase) {
    this.updatePaymentUseCase = updatePaymentUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.body;

      const payment = await this.updatePaymentUseCase.execute(params);

      return ok(payment);
    } catch (error) {
      if (error instanceof PaymentError) {
        return badRequest(error.message);
      }

      console.error(error);
      return serverError();
    }
  }
}
