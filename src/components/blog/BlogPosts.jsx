import React, { useState, useEffect, useRef } from "react";
import { BlogList } from "./BlogList";

const LOCAL_STORAGE_KEY = "myBlog.posts";

export const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPosts) setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleDelete = (id) =>
    setPosts((posts) => posts.filter((post) => post.id !== id));

  return (
    <div>
      <BlogList
        posts={posts}
        handleDelete={handleDelete}
        setPosts={[setPosts]}
      />
    </div>
  );
};
