/* Creates the first dashboard admin if no users exist yet.
   Usage (from project root, with env configured):
     ADMIN_EMAIL=you@logoslegal.nl ADMIN_PASSWORD='strong-password' ADMIN_NAME='Naam' \
       npx payload run scripts/seed-user.ts
   Safe to re-run: does nothing when a user already exists. */
import { getPayload } from "payload";
import config from "../src/payload.config";

const run = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME || "Admin";

  const payload = await getPayload({ config });
  const existing = await payload.find({ collection: "users", limit: 10 });

  if (existing.totalDocs > 0) {
    console.log(
      "Users already exist:",
      existing.docs.map((u) => u.email).join(", ")
    );
    process.exit(0);
  }

  if (!email || !password) {
    console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD environment variables.");
    process.exit(1);
  }

  await payload.create({
    collection: "users",
    data: { email, password, name },
  });
  console.log(`Created first admin: ${email}`);
  process.exit(0);
};

run();
