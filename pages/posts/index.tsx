import { Post, PostType } from "../../components";

interface Props {
  posts: PostType[];
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="my-20 mx-auto flex w-1/2 flex-col gap-5">
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
};

export default Posts;
