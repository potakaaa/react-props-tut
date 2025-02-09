import PostCard from "@/components/PostCard";

const PostsPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <h1 className="fixed top-10 text-3xl font-bold">Posts Page</h1>
      <PostCard />
    </div>
  );
};

export default PostsPage;
