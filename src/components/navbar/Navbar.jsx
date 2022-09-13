import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="container-nav">
        <Link to="/">
          {" "}
          <h1 className="logo">MyBlog</h1>
        </Link>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/CreatePosts">Create Posts</Link>
            </li>
            <li>
              <Link to="/blog/BlogPosts">Blog Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
