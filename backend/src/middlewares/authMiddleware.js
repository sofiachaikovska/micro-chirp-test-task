import jwt from "jsonwebtoken";

export const authMiddleware = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) return c.json({ error: "No token provided" }, 401);

  const token = authHeader.replace("Bearer ", "");
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    c.set("user", user);
    await next();
  } catch (err) {
    return c.json({ error: "Invalid token" }, 403);
  }
};
