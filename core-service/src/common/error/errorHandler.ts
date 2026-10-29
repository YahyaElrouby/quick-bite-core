import type { Request, Response, NextFunction } from "express";
import { AppError } from "./appError.ts";
import { logger } from "../logger/logger.ts";

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction): void {
  const isAppError = err instanceof AppError;
  const operational = isAppError && err.isOperational;
  const statusCode = isAppError ? err.statusCode : 500;

  logger.error(err.message, {
    statusCode,
    stack: err.stack,
    operational,
    body: req.body,
    correlationId: req.correlationId,
  });

  if (operational) {
    res.status(statusCode).json({ error: err.message });
    return;
  }

  res.status(500).json({ error: "Something went wrong" });
}
