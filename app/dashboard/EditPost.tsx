type editProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  comments?: {
    id: string;
    postId: string;
    userId: string;
  }[];
};

const EditPost = ({avatar,id,name,title,comments}: editProps) => {
  return <div>EditPost</div>;
};

export default EditPost;
