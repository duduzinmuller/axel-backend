import { UpdateUserManagmentController } from "../../../controller/admin/update-user-managment";
import { UpdateUserManagmentRepository } from "../../../repositories/admin/update-user-management";
import { GetUserByIdRepository } from "../../../repositories/user/get-by-id-user";
import { UpdateUserManagmentUseCase } from "../../../use-cases/admin/update-user-managment";
import { GetUserByIdUseCase } from "../../../use-cases/user/get-user-by-id";

export const makeUpdateUserManagementController = () => {
  const updateUserManagmentRepository = new UpdateUserManagmentRepository();
  const getUserByIdRepository = new GetUserByIdRepository();
  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);
  const updateUserManagmentUseCase = new UpdateUserManagmentUseCase(
    updateUserManagmentRepository,
    getUserByIdUseCase,
  );

  const updateUserManagmentController = new UpdateUserManagmentController(
    updateUserManagmentUseCase,
  );

  return updateUserManagmentController;
};
