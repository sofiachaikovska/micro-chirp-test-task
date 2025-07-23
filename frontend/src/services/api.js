import axios from "axios";

const API_BASE = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function registerUser({ username, password }) {
  try {
    const response = await api.post("/register", { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to register");
  }
}

export async function loginUser({ username, password }) {
  try {
    const response = await api.post("/login", { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to login");
  }
}

export async function fetchChirps() {
  try {
    const response = await api.get("/chirps");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch chirps");
  }
}

export async function postChirp(token, content) {
  try {
    const response = await api.post(
      "/chirps",
      { content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to post chirp");
  }
}
