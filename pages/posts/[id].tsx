import { PostType as Post } from "../../components";
import { GetStaticProps, GetStaticPaths } from "next";

const PostPage = ({ title, body }: Post) => {
  return (
    <div className="mx-20 flex h-screen flex-col justify-center p-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params!.id}`
  );

  const post: Post = await res.json();

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts: Post[] = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
