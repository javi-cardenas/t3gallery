import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";

await migrate(db, { migrationsFolder: "drizzle" });