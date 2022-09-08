import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="container-nav">
        <h1 className="logo">MyBlog</h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/MyBlog">Create Posts</Link>
            </li>
            <li>
              <Link to="/blog/BlogPosts">Blog Posts</Link>
            </li>
            <li>
              <Link to="/imageGallery/UploadImages">Upload Images</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};