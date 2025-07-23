"use client";

export default function ChirpList({ chirps }) {
  if (!chirps.length) return <p>No chirps yet.</p>;

  return (
    <ul className="space-y-4">
      {chirps.map(({ content, username, created_at }, i) => (
        <li
          key={i}
          className="p-4 border rounded shadow-sm hover:shadow-md transition"
        >
          <p className="mb-1">{content}</p>
          <small className="text-gray-600">
            @{username} &middot; {new Date(created_at).toLocaleString()}
          </small>
        </li>
      ))}
    </ul>
  );
}
