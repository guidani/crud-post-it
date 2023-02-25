export type PostType = {
  title: string;
  id: string;
  createdAt: Date;
  user: {
    name: string;
    image: string;
  };
  Comment?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  };
};
