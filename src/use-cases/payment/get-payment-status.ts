import { PaymentIdError } from "../../errors/payment";
import { GetPaymentStatusRepository } from "../../repositories/payment/get-payment-status";

export class GetPaymentStatusUseCase {
  constructor(private getPaymentStatusRepository: GetPaymentStatusRepository) {
    this.getPaymentStatusRepository = getPaymentStatusRepository;
  }

  async execute(paymentId: string) {
    const payment = await this.getPaymentStatusRepository.execute(paymentId);

    if (!payment) {
      throw new PaymentIdError();
    }

    return { status: payment.status, plan: payment.plan };
  }
}
