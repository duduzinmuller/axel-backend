import { CreateUserRepository } from "../../repositories/user/create-user";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../types/user";

export class CreateUserUseCase {
  createUserRepository: CreateUserRepository;
  constructor(createUserRepository: CreateUserRepository) {
    this.createUserRepository = createUserRepository;
  }
  async execute(createUserParams: User) {
    const userId = uuidv4();

    const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

    const user = {
      userId,
      ...createUserParams,
      password: hashedPassword,
    };

    const result = await this.createUserRepository.execute(user);

    return result;
  }
}
