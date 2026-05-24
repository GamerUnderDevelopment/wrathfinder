import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "~/env";
import * as schema from "./db/schema";

const pool = new Pool({
  connectionString: env.DATABASE_URL.replace("sslmode=require", "sslmode=verify-full"),
  ssl: {
    rejectUnauthorized: true,
  },
});

export const db = drizzle(pool, { schema });