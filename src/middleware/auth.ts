import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prisma";

export const auth = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const accessToken = request.headers?.authorization?.split("Bearer ")[1];
    if (!accessToken) {
      response.status(401).send({ message: "Unauthorized" });
      return;
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET!,
    ) as { userId: string };

    if (!decodedToken || !decodedToken.userId) {
      response.status(401).send({ message: "Unauthorized" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      response.status(401).send({ message: "Unauthorized" });
      return;
    }

    request.user = user;
    request.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error(error);
    response.status(401).send({ message: "Unauthorized" });
    return;
  }
};
