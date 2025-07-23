"use client";

import { useState } from "react";

export default function ChirpForm({ onSubmit, isLoading }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        className="w-full p-3 border rounded"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-3 font-semibold rounded disabled:opacity-50 hover:bg-blue-700 cursor-pointer transition-colors duration-200"
        disabled={isLoading}
      >
        Chirp
      </button>
    </form>
  );
}
