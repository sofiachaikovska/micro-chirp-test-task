import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "./src/app.js";

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
