import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { pgClient } from "./db";

dotenv.config();

async function runSqlWithPg(sql: string) {
  if (!pgClient) throw new Error("DATABASE_URL not set for pg execution");
  await pgClient.connect();
  try {
    await pgClient.query("BEGIN");
    await pgClient.query(sql);
    await pgClient.query("COMMIT");
  } catch (error) {
    await pgClient.query("ROLLBACK");
    throw error;
  } finally {
    await pgClient.end();
  }
}

async function main() {
  const usePg = !!process.env.DATABASE_URL;
  if (!usePg) {
    throw new Error(
      "DATABASE_URL is required. Direct SQL via Supabase client is not implemented in this script."
    );
  }

  const migrationSql = fs.readFileSync(
    path.join(__dirname, "..", "migrations", "migration.sql"),
    "utf8"
  );
  const seedSql = fs.readFileSync(
    path.join(__dirname, "..", "migrations", "seed.sql"),
    "utf8"
  );

  console.log("Running migration...");
  await runSqlWithPg(migrationSql);
  console.log("Migration complete.");

  console.log("Running seed...");
  await runSqlWithPg(seedSql);
  console.log("Seed complete.");
}

main().catch((error) => {
  console.error("Error running seed:", error);
  process.exit(1);
});
