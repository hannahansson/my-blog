import React from "react";
import { BlogPosts } from "./BlogPosts";


export const BlogContent = ({post}) =>{
        return (
            <div className="flex">
            <div className="container">
                <div className="blog-post">
                 
               <div className="delete"><button type="button">Delete</button></div> 
              <h2>{post.title}</h2>
                <div><p>{post.content}</p></div>
              
               <p className="author">author: {post.author} </p>
              
                </div>
</div>
</div>
        )
}
