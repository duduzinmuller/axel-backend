import {
  AdminUnauthorizedError,
  CannotEditOtherAdminsError,
} from "../../errors/admin";
import { UserNotFoundError } from "../../errors/user";
import { UpdateUserManagmentRepository } from "../../repositories/admin/update-user-management";
import { UpdateUserData } from "../../types/user";
import { GetUserByIdUseCase } from "../user/get-user-by-id";

export class UpdateUserManagmentUseCase {
  constructor(
    private updateUserManagmentRepository: UpdateUserManagmentRepository,
    private getUserByIdUseCase: GetUserByIdUseCase,
  ) {
    this.updateUserManagmentRepository = updateUserManagmentRepository;
  }

  async execute(userId: string, updateData: UpdateUserData, adminId: string) {
    const admin = await this.getUserByIdUseCase.execute(adminId);

    if (!admin || admin.role !== "ADMIN") {
      throw new AdminUnauthorizedError();
    }

    const userToUpdate = await this.getUserByIdUseCase.execute(userId);

    if (!userToUpdate) {
      throw new UserNotFoundError("Usuario não encontrado");
    }

    if (userToUpdate.role === "ADMIN" && adminId !== userId) {
      throw new CannotEditOtherAdminsError();
    }

    const user = await this.updateUserManagmentRepository.execute(
      userId,
      updateData,
    );

    return user;
  }
}
