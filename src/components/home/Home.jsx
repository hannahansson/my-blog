import React from "react";
import { Link } from "react-router-dom";
import './home.css';

export const Home = () => {
    return(
        <>
          <h1>WELCOME TO <span>MYBLOG</span></h1>
          <div className="info"><p>This is a site were you can blog about your life.  It's very easy to create a blog post. You can also read blog posts. <br></br><br></br><span>Happy Blogging!</span> </p></div>
          <div className="container-overview">
       
          <Link to="/blog/MyBlog"><div className="my-blog">Write a post...</div> </Link>   
           
          <Link to="/blog/BlogPosts"> <div className="posts">Read posts...</div></Link>
          </div>
        </>
    )
}