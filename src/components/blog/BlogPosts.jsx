import React, { useState, useEffect } from "react";
import { BlogList } from "./BlogList";
import { Pagination } from "../pagination/Pagination";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "myBlog.posts";

export const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  //get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      {posts.length ? (
        <BlogList posts={currentPosts} handleDelete={handleDelete} />
      ) : (
        <div>
          <h1>There are no blog posts yet...</h1>
          <Link to="/blog/CreatePosts">
            <div className="no-posts">
              <button className="show-posts-btn">Write a post</button>
            </div>
          </Link>
        </div>
      )}

      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
