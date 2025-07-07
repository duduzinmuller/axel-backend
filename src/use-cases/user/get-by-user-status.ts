import { GetByUserStatusRepository } from "../../repositories/user/get-by-user-status";

export class GetByUserStatusUseCase {
  constructor(private getByUserStatusRepository: GetByUserStatusRepository) {
    this.getByUserStatusRepository = getByUserStatusRepository;
  }
  async execute() {
    const statusUser = await this.getByUserStatusRepository.execute();

    return statusUser;
  }
}
