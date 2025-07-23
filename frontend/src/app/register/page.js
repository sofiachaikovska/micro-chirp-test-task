"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../../services/api";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser(form);
      router.push("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 pt-10 pb-10 border border-gray-300 dark:border-gray-600 rounded-xl mt-40 backdrop-blur-sm bg-transparent">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Register
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          placeholder="Username"
          className="w-full p-3 border rounded dark:bg-transparent dark:border-gray-600 dark:text-gray-100"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="w-full p-3 border rounded dark:bg-transparent dark:border-gray-600 dark:text-gray-100"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded font-semibold hover:bg-blue-700 cursor-pointer transition-colors duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}
