import prisma from "../../../prisma/prisma";
import { User } from "../../types/user";

export class GetByUserRepository {
  async execute(getUserParams: User) {
    const user = await prisma.user.findMany({
      where: {
        email: getUserParams.email,
      },
    });

    return user;
  }
}
