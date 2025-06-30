import { GetAccessCodeRepository } from "../../repositories/access-code/get-access-code";

export class GetAccessCodeUseCase {
  constructor(private getAccessCodeRepository: GetAccessCodeRepository) {
    this.getAccessCodeRepository = getAccessCodeRepository;
  }
  async execute() {
    const code = await this.getAccessCodeRepository.execute();

    return code;
  }
}
