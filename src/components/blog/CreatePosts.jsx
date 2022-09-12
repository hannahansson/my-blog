import React from "react";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./blog.css";
import { BlogPosts } from "./BlogPosts";

const LOCAL_STORAGE_KEY = "myBlog.posts";

export const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const [posts, setPosts] = useState([]);
  const [showPost, SetShowPost] = useState(false);

  const authorRef = useRef();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPosts) setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    //prevents from refreshing the page
    e.preventDefault();

    const author = authorRef.current.value;
    if (author === "") return;

    setPosts((prevPosts) => {
      return [
        ...prevPosts,
        {
          id: uuidv4(),
          title: title,
          content: content,
          date: date,
          author: author,
        },
      ].reverse();
    });

    //clears the output with an empty string/default value
    setTitle("");
    setContent("");
    setDate(new Date().toLocaleDateString());
    setAuthor("");
  };

  const HandleShowPosts = () => {
    const showPosts = showPost === false ? true : false;
    SetShowPost(showPosts);
  };

  return (
    <>
      <div className="show-posts">
        <button className="show-posts-btn" onClick={HandleShowPosts}>
          Show posts
        </button>
      </div>
      {showPost ? <BlogPosts showPost={true} /> : <div />}
      <div className="container-create">
        <div className="create-post">
          <h2>Add a new Post </h2>
          <form onSubmit={handleSubmit}>
            <label>
              Blog title:
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Blog Content:
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </label>
            <label>
              Blog Author:
              <select
                ref={authorRef}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="Hanna">Hanna</option>
                <option value="Unknown">Unknown</option>
              </select>
            </label>
            <button>Add post</button>
          </form>
        </div>
      </div>
    </>
  );
};
