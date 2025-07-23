import { Hono } from "hono";
import { cors } from "hono/cors";
import authRoutes from "./routes/authRoutes.js";
import chirpRoutes from "./routes/chirpRoutes.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.route("/api", authRoutes);
app.route("/api/chirps", chirpRoutes);

export default app;
