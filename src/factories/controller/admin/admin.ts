import { DeleteUserManagementController } from "../../../controller/admin/delete-user-managment";
import { UpdateUserManagmentController } from "../../../controller/admin/update-user-managment";
import { DeleteUserManagementRepository } from "../../../repositories/admin/delete-user-management";
import { UpdateUserManagmentRepository } from "../../../repositories/admin/update-user-management";
import { GetUserByIdRepository } from "../../../repositories/user/get-by-id-user";
import { DeleteUserManagementUseCase } from "../../../use-cases/admin/delete-user-management";

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

export const makeDeleteUserManagementController = () => {
  const deleteUserManagmentRepository = new DeleteUserManagementRepository();
  const getUserByIdRepository = new GetUserByIdRepository();
  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);
  const deleteUserManagmentUseCase = new DeleteUserManagementUseCase(
    deleteUserManagmentRepository,
    getUserByIdUseCase,
  );

  const deleteUserManagmentController = new DeleteUserManagementController(
    deleteUserManagmentUseCase,
  );

  return deleteUserManagmentController;
};
