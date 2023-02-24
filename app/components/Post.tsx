"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  avatar?: string;
  name?: string;
  postTitle?: string;
  id?: string | number;
}

const Post = ({ avatar, name, postTitle, id }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={avatar || ""}
          src={avatar || ""}
        />
        <h3>{name || ""}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{postTitle || ""}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold">Comments</p>
        </Link>
      </div>
    </div>
  );
};

export default Post;
