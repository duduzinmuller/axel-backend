import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
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

    (request as any).userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error(error);
    response.status(401).send({ message: "Unauthorized" });
    return;
  }
};
