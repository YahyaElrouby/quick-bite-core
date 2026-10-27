import { config } from "dotenv";
import { z } from "zod";

config();

const schema = z.object({
  PORT: z.string().default("3000"),

  DB_HOST: z.string().min(1),
  DB_PORT: z.string().default("5432"),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_pool_max: z.string().default("10"),
  DB_MIGRATIONS_DIR: z.string().default("./src/migrations"),
  DB_MIGRATIONS_EXT: z.enum(["ts", "js"]).default("ts"),
});

export const parsed = schema.parse(process.env);

export const env = {
  PORT: Number(parsed.PORT),
  db: {
    host: parsed.DB_HOST,
    port: Number(parsed.DB_PORT),
    user: parsed.DB_USER,
    password: parsed.DB_PASSWORD,
    database: parsed.DB_NAME,
    pool_max: Number(parsed.DB_pool_max),
    migrations: {
      directory: parsed.DB_MIGRATIONS_DIR,
      extension: parsed.DB_MIGRATIONS_EXT,
    },
  },
};
