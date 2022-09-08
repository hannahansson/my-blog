import React from "react";
import { BlogContent } from "./BlogContent";

export const BlogList = ({ posts, handleDelete }) => {
  return posts.map((post) => {
    return (
      <BlogContent key={post.id} handleDelete={handleDelete} post={post} />
    );
  });
};
