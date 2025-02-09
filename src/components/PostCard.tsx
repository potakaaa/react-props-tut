import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export interface PostCardProps {
  title: string;
  description: string;
  imageUrl: string | undefined;
}

const PostCard = (post: PostCardProps) => {
  return (
    <Card className="w-72 shadow-lg">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={post.imageUrl ? post.imageUrl : "/dog/dog1.webp"}
          alt="dog"
          className="object-cover aspect-square rounded-md shadow-sm"
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button>Like</Button>
        <Button>Comment</Button>
        <Button>Share</Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
