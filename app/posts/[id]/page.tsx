import { PostType } from "../../../components";

const PostPage = async ({ params }: { params: { id: string }}) => {
  const { title, body } = await getPost(params.id);

  return (
    <div className="mx-20 flex h-screen flex-col justify-center p-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
};

const getPost = async (id: string): Promise<PostType> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

   return await res.json();
};

export default PostPage;
