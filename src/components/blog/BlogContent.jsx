import React from "react";

export const BlogContent = ({ post, handleDelete }) => {
  return (
    <>
      <div className="container-blog">
        <div className="blog-post">
          <div className="delete">
            <p className="date">{post.date}</p>
            <input
              type="button"
              className="del-button"
              onClick={() => handleDelete(post.id)}
              value="Delete"
            />{" "}
          </div>
          <h2>{post.title}</h2>
          <div>
            <p className="content">{post.content}</p>
          </div>
          <p className="author">Author: {post.author} </p>
        </div>
      </div>
    </>
  );
};
