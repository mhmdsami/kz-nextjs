import { PostType as Post } from "../../components";

const PostPage = ({ title, body } : Post) => {
  return (
    <div className="flex flex-col h-screen justify-center p-10 mx-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostPage;
