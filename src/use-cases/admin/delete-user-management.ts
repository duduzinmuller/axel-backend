import { GetUserByIdUseCase } from "../user/get-user-by-id";
import { DeleteUserManagementRepository } from "../../repositories/admin/delete-user-management";
import {
  AdminUnauthorizedError,
  CannotDeleteOtherAdminsError,
  CannotDeleteOwnAccountError,
} from "../../errors/admin";

export class DeleteUserManagementUseCase {
  constructor(
    private deleteUserManagementRepository: DeleteUserManagementRepository,
    private getUserByIdUseCase: GetUserByIdUseCase,
  ) {
    this.deleteUserManagementRepository = deleteUserManagementRepository;
    this.getUserByIdUseCase = getUserByIdUseCase;
  }

  async execute(userId: string, adminId: string) {
    const admin = await this.getUserByIdUseCase.execute(adminId);

    if (!admin || admin.role !== "ADMIN") {
      throw new AdminUnauthorizedError();
    }

    const userToDelete = await this.getUserByIdUseCase.execute(userId);

    if (userToDelete?.role === "ADMIN" && adminId !== userId) {
      throw new CannotDeleteOtherAdminsError();
    }

    if (adminId === userId) {
      throw new CannotDeleteOwnAccountError();
    }

    const user = await this.deleteUserManagementRepository.execute(userId);

    return user;
  }
}
