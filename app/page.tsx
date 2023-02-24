"use client";
import { Toaster } from "react-hot-toast";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import usePosts from "./hooks/swr/usePosts";

export default function Home() {
  // const { data, error, isLoading } = useQuery({
  //   queryFn: getAllPosts,
  //   queryKey: ["posts"],
  // });

  const { posts, error, isLoading } = usePosts();

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <Toaster />
      <AddPost />
      {posts?.map((post) => (
        <Post
          key={post?.id}
          avatar={post?.user.image}
          name={post?.user.name}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
