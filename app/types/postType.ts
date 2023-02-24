export type PostType = {
  title: string;
  id: string;
  createdAt: Date;
  user: {
    name: string;
    image: string;
  };
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  };
};
