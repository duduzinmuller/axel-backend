import { MessageUsageRepository } from "../../repositories/message-usage/message-usage";

export class GetMessageUsageUseCase {
  constructor(private messageUsageRepository: MessageUsageRepository) {
    this.messageUsageRepository = messageUsageRepository;
  }

  async execute() {
    return this.messageUsageRepository.getAll();
  }
}
