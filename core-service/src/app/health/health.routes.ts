import { Router } from "express";
import { ping } from "../../common/knex/knex.js";


export const healthRoutes = Router();

healthRoutes.get("/", async (_req, res) => {
  try {
    await ping();
    res.status(200).json({ status: "ok", db: "up" });

  } catch (error) {
    res.status(500).send({ message: "db down" });
  }
});