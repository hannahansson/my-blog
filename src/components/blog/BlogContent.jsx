import React from "react";
import { BlogPosts } from "./BlogPosts";


export const BlogContent = ({post, handleDelete}) =>{
        return (
            <div className="flex">
            <div className="container-blog">
                <div className="blog-post">
               <div className="delete">
                <input type="button" className="button" onClick={() => handleDelete(post.id)} value="Delete"/>
               </div> 
              <h2>{post.title}</h2>
                <div><p>{post.content}</p></div>
               <p className="author">Author: {post.author} </p>
                </div>
</div>
</div>
        )
}
