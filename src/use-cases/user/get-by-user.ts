import { GetByUserRepository } from "../../repositories/user/get-by-user";
import { User } from "../../types/user";

export class GetByUserUseCase {
  constructor(private getByUserRepository: GetByUserRepository) {
    this.getByUserRepository = getByUserRepository;
  }

  async execute(getUserParams: User) {
    const user = await this.getByUserRepository.execute(getUserParams);

    return user;
  }
}
