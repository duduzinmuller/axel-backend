import { MessageUsageRepository } from "../../../repositories/message-usage/message-usage";
import { GetMessageUsageUseCase } from "../../../use-cases/message-usage/get-message-usage";
import { GetMessageUsageController } from "../../../controller/message-usage/get-message-usage";

export const makeGetMessageUsageController = () => {
  const messageUsageRepository = new MessageUsageRepository();
  const getMessageUsageUseCase = new GetMessageUsageUseCase(
    messageUsageRepository,
  );
  const getMessageUsageController = new GetMessageUsageController(
    getMessageUsageUseCase,
  );
  return getMessageUsageController;
};
