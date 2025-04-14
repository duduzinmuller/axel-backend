import prisma from "../../../prisma/prisma";
import { User } from "../../types/user";

export class CreateUserRepository {
  async execute(createUserParams: User) {
    const user = await prisma.user.create({
      data: {
        id: createUserParams.id,
        name: createUserParams.name,
        email: createUserParams.email,
        image: createUserParams.image,
        password: createUserParams.password,
        plan: createUserParams.plan || "FREE",
        provider: createUserParams.provider || "LOCAL",
        providerId: createUserParams.providerId,
      },
    });

    return user;
  }
}
