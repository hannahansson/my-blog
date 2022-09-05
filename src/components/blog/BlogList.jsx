import React from "react";
import { BlogContent } from "./BlogContent";
import { BlogPosts } from "./BlogPosts";


export const BlogList = ({posts}) =>{
return posts.map((post) => {
    return <BlogContent key={post.id} post={post}/>
})
}