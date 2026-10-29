import knex from "knex";

import knexConfig from "./knexFile.ts";


export const db = knex(knexConfig);

export async function ping()  {

    await db.raw("SELECT 1");
}
    
