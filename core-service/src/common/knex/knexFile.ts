
import type { Knex } from "knex";
import { env } from "../config/env.ts";

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
    directory: env.db.migrations.directory,
    extension: env.db.migrations.extension,
  },
};

export default knexConfig;