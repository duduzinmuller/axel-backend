import { GetAccessCodeRepository } from "../../repositories/access-code/get-access-code";
import { AccessCode } from "../../types/access-code";

export class GetAccessCodeUseCase {
  constructor(private getAccessCodeRepository: GetAccessCodeRepository) {
    this.getAccessCodeRepository = getAccessCodeRepository;
  }
  async execute(accessCodeParams: Partial<AccessCode>) {
    const code = await this.getAccessCodeRepository.execute(accessCodeParams);

    return code;
  }
}
