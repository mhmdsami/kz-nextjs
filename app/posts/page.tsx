import { Post, PostType } from "../../components";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <div className="my-20 mx-auto flex w-1/2 flex-col gap-5">
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
};

const getAllPosts = async (): Promise<PostType[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await res.json();
};

export default Posts;
