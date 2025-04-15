import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = request.headers?.authorization?.split("Bearer ")[1];
    if (!accessToken) {
      return response.status(401).send({ message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET as string,
    ) as { userId: string };

    if (!decodedToken || !decodedToken.userId) {
      return response.status(401).send({ message: "Unauthorized" });
    }

    request.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error(error);
    return response.status(401).send({ message: "Unauthorized" });
  }
};
