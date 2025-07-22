import knexConfig from "./knexfile.js";
import knex from "knex";

const db = knex(knexConfig.development);

const [, , command] = process.argv;

if (command === "latest") {
  await db.migrate.latest();
  console.log("Migrations completed");
} else if (command === "rollback") {
  await db.migrate.rollback();
  console.log("Rollback completed");
} else {
  console.log("Unknown command");
}

await db.destroy();
