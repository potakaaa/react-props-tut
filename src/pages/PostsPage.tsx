import PostCard, { PostCardProps } from "@/components/PostCard";
import { dogPosts } from "@/global/posts";
import { getPosts } from "@/lib/services/postService";
import { title } from "process";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      setPosts(
        response.map((post: any) => ({
          title: post.title,
          description: post.body,
        }))
      );

      console.log(response);
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <h1 className="fixed top-10 text-3xl font-bold">Posts Page</h1>

      {posts.map((post: PostCardProps, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default PostsPage;
