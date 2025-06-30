import { GetUserPlanRepository } from "../../repositories/user/get-user-plan";
import { PlanPercentage } from "../../types/user";

export class GetUserPlanUseCase {
  constructor(private getUserPlanRepository: GetUserPlanRepository) {
    this.getUserPlanRepository = getUserPlanRepository;
  }

  async execute(): Promise<PlanPercentage[]> {
    const planPercentages = await this.getUserPlanRepository.execute();

    return planPercentages;
  }
}
