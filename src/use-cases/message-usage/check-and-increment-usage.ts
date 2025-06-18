import { MessageUsageRepository } from "../../repositories/message-usage/message-usage";
import {
  MessageLimitExceededError,
  UserPlanNotFoundError,
} from "../../errors/message-usage";
import { Plan } from "@prisma/client";

export class CheckAndIncrementUsageUseCase {
  constructor(private messageUsageRepository: MessageUsageRepository) {
    this.messageUsageRepository = messageUsageRepository;
  }

  private getPlanLimit(plan: Plan): number | null {
    switch (plan) {
      case "FREE":
        return 10;
      case "MONTHLY":
      case "ANNUAL":
        return null;
      default:
        return 10;
    }
  }

  async execute(userId: string) {
    const userPlan = await this.messageUsageRepository.getUserPlan(userId);

    if (!userPlan) {
      throw new UserPlanNotFoundError();
    }

    const planLimit = this.getPlanLimit(userPlan);

    if (planLimit === null) {
      const updatedUsage =
        await this.messageUsageRepository.incrementUsage(userId);

      return {
        currentCount: updatedUsage.count,
        planLimit: "Ilimitado",
        plan: userPlan,
        remainingMessages: "Ilimitado",
      };
    }

    const currentUsage =
      await this.messageUsageRepository.getCurrentDayUsage(userId);
    const currentCount = currentUsage?.count || 0;

    if (currentCount >= planLimit) {
      throw new MessageLimitExceededError(userPlan, planLimit);
    }

    const updatedUsage =
      await this.messageUsageRepository.incrementUsage(userId);

    return {
      currentCount: updatedUsage.count,
      planLimit,
      plan: userPlan,
      remainingMessages: planLimit - updatedUsage.count,
    };
  }
}
