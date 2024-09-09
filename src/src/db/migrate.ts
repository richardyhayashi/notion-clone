import "dotenv/config";
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './db';

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "src/db/migrations",
    });

    console.log("Migration successful!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();