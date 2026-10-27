import knex from "knex";
import type { Knex } from "knex";
import { env } from "../config/env.js";

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database,
  },
  pool: {
    min: 0,
    max: env.db.pool_max,
  },
  migrations: {
    directory: "./src/migrations",
    extension: "ts",
  },
};

export const db = knex(knexConfig);

export async function ping()  {

    await db.raw("SELECT 1");
}
    
