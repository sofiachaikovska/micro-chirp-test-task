import { Hono } from "hono";
import { getAllChirps, createChirp } from "../controllers/chirpController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const chirpRoutes = new Hono();

chirpRoutes.get("/", getAllChirps);
chirpRoutes.post("/", authMiddleware, createChirp);

export default chirpRoutes;
