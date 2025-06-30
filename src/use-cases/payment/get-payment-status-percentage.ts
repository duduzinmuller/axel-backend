import { GetPaymentStatusPercentageRepository } from "../../repositories/payment/get-payment-status-percentage";
import { PaymentStatusPercentage } from "../../types/payment";

export class GetPaymentStatusPercentageUseCase {
  constructor(
    private getPaymentStatusPercentageRepository: GetPaymentStatusPercentageRepository,
  ) {
    this.getPaymentStatusPercentageRepository =
      getPaymentStatusPercentageRepository;
  }

  async execute(): Promise<PaymentStatusPercentage[]> {
    const statusPercentages =
      await this.getPaymentStatusPercentageRepository.execute();

    return statusPercentages;
  }
}
