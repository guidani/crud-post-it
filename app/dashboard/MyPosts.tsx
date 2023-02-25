"use client";

import axios from "axios";
import useSWR from "swr";
import { AuthPosts } from "../types/AuthPosts";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const response = await axios.get<AuthPosts>("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, error, isLoading } = useSWR<AuthPosts>(
    "/api/posts/authPosts",
    fetchAuthPosts
  );
  if (isLoading) return <p>Posts estão sendo carregados...</p>;
  if (error) return <p>Erro. Algo deu errado!!!</p>;
  return (
    <>
      {data?.posts?.map((post) => {
        <EditPost avatar={''} id="" name="" title="" comments={} />;
      })}
    </>
  );
}
