import prisma from "../../../prisma/prisma";
import { UserNotFoundError } from "../../errors/user";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class DeleteUserRepository {
  async execute(userId: string) {
    try {
      await prisma.emailVerification.deleteMany({
        where: { userId },
      });

      return await prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new UserNotFoundError(userId);
        }
      }

      throw error;
    }
  }
}
