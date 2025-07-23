"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import ChirpList from "./components/ChirpList";
import ChirpForm from "./components/ChirpForm";
import { fetchChirps, postChirp } from "../services/api";
import { useState } from "react";

export default function Home() {
  const queryClient = useQueryClient();
  const token = Cookies.get("token");
  const [error, setError] = useState(null);

  const { data: chirps = [], isLoading } = useQuery({
    queryKey: ["chirps"],
    queryFn: fetchChirps,
  });

  const mutation = useMutation({
    mutationFn: (content) => postChirp(token, content),
    onMutate: async (newContent) => {
      setError(null);
      await queryClient.cancelQueries({ queryKey: ["chirps"] });
      const previousChirps =
        queryClient.getQueryData({ queryKey: ["chirps"] }) || [];

      queryClient.setQueryData({ queryKey: ["chirps"] }, [
        {
          content: newContent,
          username: "You",
          created_at: new Date().toISOString(),
        },
        ...previousChirps,
      ]);

      return { previousChirps };
    },
    onError: (err, newContent, context) => {
      setError("Failed to post chirp");
      if (context?.previousChirps) {
        queryClient.setQueryData(
          { queryKey: ["chirps"] },
          context.previousChirps
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["chirps"] });
    },
  });

  const handlePostChirp = (content) => {
    if (!token) {
      setError("You must be logged in to post chirps");
      return;
    }
    mutation.mutate(content);
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
        Chirps Feed
      </h1>
      {token && (
        <ChirpForm onSubmit={handlePostChirp} isLoading={mutation.isLoading} />
      )}
      {error && <p className="text-red-600 my-4">{error}</p>}
      {isLoading ? (
        <p className="text-gray-700 dark:text-gray-300">Loading chirps...</p>
      ) : (
        <ChirpList chirps={chirps} />
      )}
    </main>
  );
}
