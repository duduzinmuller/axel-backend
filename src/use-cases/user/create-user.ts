import { CreateUserRepository } from "../../repositories/user/create-user";
import bcrypt from "bcrypt";
import { User } from "../../types/user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { EmailAlreadyInUseError } from "../../errors/user";
import { IdGeneratorAdapter } from "../../adapters/id-generator";
import { PasswordHasherAdapter } from "../../adapters/password-hasher";

export class CreateUserUseCase {
  createUserRepository: CreateUserRepository;
  getUserByEmailRepository: GetUserByEmailRepository;
  idGeneratorAdapter: IdGeneratorAdapter;
  passwordHasherAdapter: PasswordHasherAdapter;
  constructor(
    createUserRepository: CreateUserRepository,
    getUserByEmailRepository: GetUserByEmailRepository,
    idGeneratorAdapter: IdGeneratorAdapter,
    passwordHasherAdapter: PasswordHasherAdapter,
  ) {
    this.createUserRepository = createUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.passwordHasherAdapter = passwordHasherAdapter;
  }
  async execute(createUserParams: User) {
    const withProviderEmail = await this.getUserByEmailRepository.execute(
      createUserParams.email,
    );

    if (withProviderEmail) {
      throw new EmailAlreadyInUseError(createUserParams.email);
    }

    const userId = this.idGeneratorAdapter.execute();

    const hashedPassword = await this.passwordHasherAdapter.execute(
      createUserParams.password,
    );

    const { id, ...restParams } = createUserParams;

    const image =
      "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f8b4-61f7-9860-2d553cd02da1/raw?se=2025-04-14T19%3A54%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=99f02b51-766a-59fe-9596-1e7448c5f781&skoid=aa8389fc-fad7-4f8c-9921-3c583664d512&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T11%3A48%3A06Z&ske=2025-04-15T11%3A48%3A06Z&sks=b&skv=2024-08-04&sig=71FEu6RnVeViDLKUpn5xSlL34RypnFRzhw1FevyMe7k%3D";

    const user = {
      id: userId,
      image,
      ...restParams,
      password: hashedPassword,
    };

    const result = await this.createUserRepository.execute(user);

    return result;
  }
}
