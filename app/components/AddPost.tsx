"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  let toastPostId: string;

  // criar um post
  const { mutate, isError, data } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      async onSuccess(data, variables, context) {
        toast.success("Post criado com sucesso... :D", { id: toastPostId });
        setIsDisabled(false);
        setTitle("");
      },
      async onError(error, variables, context) {
        setIsDisabled(false);
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostId });
        }
      },
    }
  );

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
    toastPostId = toast.loading("Criando post", { id: toastPostId });
    setIsDisabled(true);
    mutate(title);
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
