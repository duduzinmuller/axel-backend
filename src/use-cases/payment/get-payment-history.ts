import { GetPaymentHistoryRepository } from "../../repositories/payment/get-payment-history";

export class GetPaymentHistoryUseCase {
  constructor(
    private getPaymentHistoryRepository: GetPaymentHistoryRepository,
  ) {
    this.getPaymentHistoryRepository = getPaymentHistoryRepository;
  }
  async execute() {
    const payment = await this.getPaymentHistoryRepository.execute();

    return payment;
  }
}
