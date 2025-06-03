import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode = err.statusCode || 500;

  logger.error(`Error: ${err.message}`, {
    url: req.originalUrl,
    method: req.method,
    statusCode,
    details: err.details || {},
    stack: err.stack,
  });

  res.status(statusCode).json({
    success: false,
    message: err.message,
    details: err.details || {},
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
