import db from "../db/knex.js";

export const createChirp = async (c) => {
  const { content } = await c.req.json();
  const user = c.get("user");
  await db("chirps").insert({ content, user_id: user.id });
  return c.json({ success: true });
};

export const getAllChirps = async (c) => {
  const chirps = await db("chirps")
    .join("users", "chirps.user_id", "users.id")
    .select("chirps.content", "users.username", "chirps.created_at")
    .orderBy("chirps.created_at", "desc");
  return c.json(chirps);
};
