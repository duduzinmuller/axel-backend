import prisma from "../../../prisma/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { userNotFoundResponse } from "../../controller/helpers/user";
import { Prisma } from "@prisma/client";

export class UpdateUserRepository {
  async execute(
    userId: string,
    updateUserParams: Partial<Prisma.UserUpdateInput>,
  ) {
    try {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: updateUserParams,
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // P2025 = "An operation failed because it depends on one or more records that were required but not found" (from Prisma docs)
        if (error.code === "P2025") {
          throw userNotFoundResponse(userId);
        }
      }

      throw error;
    }
  }
}
