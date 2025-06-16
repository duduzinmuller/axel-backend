import prisma from "../../../prisma/prisma";
import { User } from "../../types/user";

export class GetByUserRepository {
  async execute(getUserParams: User) {
    const user = await prisma.user.findUnique({
      where: {
        id: getUserParams.id,
        email: getUserParams.email,
        name: getUserParams.name,
        image: getUserParams.image,
        createdAt: getUserParams.createdAt,
        updatedAt: getUserParams.updatedAt,
        plan: getUserParams.plan,
      },
    });

    return user;
  }
}
