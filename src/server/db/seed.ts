import { db } from ".";
import { users } from "./schema";
import { eq } from "drizzle-orm";

async function main() {
  await db.insert(users).values({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password",
  });

  const result = await db.query.users.findMany({
    where: eq(users.id, 1),
  });

  console.log(result);
}

main().catch(console.error); 