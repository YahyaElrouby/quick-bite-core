import { createApp } from "./app.ts";
import { env } from "./common/config/env.ts";
import http from "http";
import { db } from "./common/knex/knex.ts";

const app = createApp();
const server = http.createServer(app);

server.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

async function shutdown() {
  server.close(async () => {

    await db.destroy();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
