import { Hono } from "hono";
import authRoutes from "./routes/authRoutes.js";
import chirpRoutes from "./routes/chirpRoutes.js";

const app = new Hono();

app.route("/api", authRoutes);
app.route("/api/chirps", chirpRoutes);

export default app;
