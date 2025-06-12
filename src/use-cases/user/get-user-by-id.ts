import { GetUserByIdRepository } from "../../repositories/user/get-by-id-user";

export class GetUserByIdUseCase {
  constructor(private getUserByIdRepository: GetUserByIdRepository) {
    this.getUserByIdRepository = getUserByIdRepository;
  }
  async execute(userId: string) {
    const result = await this.getUserByIdRepository.execute(userId);

    return result;
  }
}
