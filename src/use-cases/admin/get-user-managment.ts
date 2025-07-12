import { UserNotFoundError } from "../../errors/user";
import { GetUserManagmentRepository } from "../../repositories/admin/get-user-management";

export class GetUserManagmentUseCase {
  constructor(private getUserManagmentRepository: GetUserManagmentRepository) {
    this.getUserManagmentRepository = getUserManagmentRepository;
  }

  async execute(id: string) {
    const user = await this.getUserManagmentRepository.execute(id);

    if (!user) {
      throw new UserNotFoundError("Usuario não encontrado");
    }

    return user;
  }
}
