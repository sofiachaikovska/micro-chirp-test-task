import db from "../db/knex.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (c) => {
  const { username, password } = await c.req.json();
  const hashed = await bcrypt.hash(password, 10);
  await db("users").insert({ username, password: hashed });
  return c.json({ success: true });
};

export const login = async (c) => {
  const { username, password } = await c.req.json();
  const user = await db("users").where({ username }).first();
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return c.json({ error: "Invalid credentials" }, 401);
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return c.json({ token });
};
