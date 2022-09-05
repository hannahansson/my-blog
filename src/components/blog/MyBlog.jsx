import React from "react";
import { useState, useEffect, useRef } from "react";
import { BlogPosts } from "./BlogPosts";
import { v4 as uuidv4 } from "uuid";
import  "./MyBlog.css";
import { BlogList } from "./BlogList";
import './blog.css';


const LOCAL_STORAGE_KEY = "myBlog.posts";

export const MyBlog  = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const [posts, setPosts] = useState([]);

    //[title, content, author]
    const titleRef = useRef();
    const contentRef = useRef();
    const authorRef = useRef();


    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedPosts) setPosts(storedPosts);
      }, []);
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
      }, [posts]);

        const handleDelete = (id) =>
        setPosts((posts) => posts.filter((post) => post.id !== id));
    
    const handleSubmit = (e) => {
        //prevents from refreshing the page
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    if (title === "" || content === "" || author === "") return;
   console.log(title, content, author)
    setPosts((prevPosts) => {
      return [...prevPosts, { id: uuidv4(), title: title, content: content, author: author}];
    });
    // clears the output with 'null'
    titleRef.current.value = null;
    contentRef.current.value = null;
    authorRef.current.value = null;

    const blog = {title, content, author};

    console.log(blog)
    console.log(posts)
   
    }
    return(
        <>
        <BlogList posts={posts} handleDelete={handleDelete} />
        <div className="container">
    <div className="create-post">
        <h2>Add a new Post </h2>
<form onSubmit={handleSubmit}>
    <label>Blog title:</label>
    <input ref={titleRef} type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
    <label>Blog Content:</label>
    <textarea  ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    <label>Blog Author:</label>
    <select ref={authorRef} value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="Hanna">Hanna</option>
        <option value="Unknown">Unknown</option>
    </select>
    <button>Add post</button>
</form>
    </div>
    </div>
    </>
    )
}
