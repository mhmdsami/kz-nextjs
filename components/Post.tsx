import Link from "next/link";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = ({ id, title, body }: PostProps) => {
  return (
    <div className="m-2 flex flex-col rounded-lg bg-black p-10 text-white">
      <h1 className="text-3xl font-bold">
        <Link href={`/posts/${id}`}>{title}</Link>
      </h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
