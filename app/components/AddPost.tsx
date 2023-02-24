"use client";

import axios from "axios";
import React, { useState } from "react";
import { useSWRConfig } from "swr";

async function sendRequest(url: string, { ...arg }) {
  return await axios.post(url, JSON.stringify(arg));
}

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);

  // criar um post
  const { mutate } = useSWRConfig();

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/posts/addPost", { title });
    mutate("/api/posts/getPosts");
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          name="title"
          id="title"
          value={title}
          placeholder="Diga o que você está pensando"
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <p
          className={`${title.length > 300 ? "text-red-700" : "text-gray-700"}`}
        >{`${title.length}/300`}</p>
        <button
          className="text-sm bg-teal-600 text-white py-2 px-4 rounded-md disabled:opacity-25"
          type="submit"
          disabled={isDisabled}
        >
          Create post
        </button>
      </div>
    </form>
  );
}
