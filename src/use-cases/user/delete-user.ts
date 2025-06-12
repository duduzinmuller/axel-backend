import { DeleteUserRepository } from "../../repositories/user/delete-user";

export class DeleteUserUseCase {
  constructor(private deleteUserRepository: DeleteUserRepository) {
    this.deleteUserRepository = deleteUserRepository;
  }
  async execute(userId: string) {
    const result = await this.deleteUserRepository.execute(userId);

    return result;
  }
}
