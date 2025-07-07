import prisma from "../../../prisma/prisma";
import { User } from "../../types/user";
import { v4 as uuidv4 } from "uuid";

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
        role: createUserParams.role || "USER",
        provider: createUserParams.provider || "LOCAL",
        providerId:
          createUserParams.providerId ||
          (createUserParams.provider === "LOCAL" ? uuidv4() : null),
        isVerified: false,
        status: "PENDING",
      },
    });

    return user;
  }

  async verifyUserEmail(userId: string) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { isVerified: true },
    });

    return user;
  }
}
