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

const PostCard = () => {
  return (
    <Card className="w-72 shadow-lg">
      <CardHeader>
        <CardTitle>Hello this is my Dog</CardTitle>
        <CardDescription>He is a lovely Dog</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="/dog/dog2.webp"
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
