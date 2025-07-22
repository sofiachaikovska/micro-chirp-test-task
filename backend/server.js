import "dotenv/config";
import app from "./src/app.js";
import { serve } from "@hono/node-server";

const port = process.env.PORT || 8000;

serve(
  {
    fetch: app.fetch,
    port,
  },
  () => {
    console.log(`Server is running at http://localhost:${port}`);
  }
);
