import { GoogleGenerateService } from "../../../services/google-generate";
import { GoogleGenerateController } from "../../../controller/google-generate/google-generate";
import { MessageUsageRepository } from "../../../repositories/message-usage/message-usage";
import { CheckAndIncrementUsageUseCase } from "../../../use-cases/message-usage/check-and-increment-usage";

export const makeGoogleGenerateController = () => {
  const googleGenerateService = new GoogleGenerateService();
  const messageUsageRepository = new MessageUsageRepository();
  const checkAndIncrementUsageUseCase = new CheckAndIncrementUsageUseCase(
    messageUsageRepository,
  );

  const googleGenerateController = new GoogleGenerateController(
    googleGenerateService,
    checkAndIncrementUsageUseCase,
  );

  return googleGenerateController;
};
