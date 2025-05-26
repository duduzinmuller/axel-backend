import { CreatePaymentUseCase } from "../../use-cases/payment/create-payment";
import { ok, serverError } from "../helpers/http";

export class CreatePaymentController {
  createPaymentUseCase: CreatePaymentUseCase;

  constructor(createPaymentUseCase: CreatePaymentUseCase) {
    this.createPaymentUseCase = createPaymentUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const params = httpRequest.body;
      const user = httpRequest.user;

      params.userId = user?.id;
      params.name = user?.name;
      params.recipient = user?.email;

      const payment = await this.createPaymentUseCase.execute(params);

      return ok(payment);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
