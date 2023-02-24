import axios from "axios";
import useSWR from "swr";

const getAllPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

function usePosts() {
  const { data, error, isLoading } = useSWR("/api/posts/getPosts", getAllPosts);
  return {
    posts: data,
    isLoading,
    error,
  };
}

export default usePosts;
