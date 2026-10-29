import { Router } from "express";
import { healthRoutes } from "./app/health/health.routes.ts";

export const routes = Router();

routes.use("/health", healthRoutes);
