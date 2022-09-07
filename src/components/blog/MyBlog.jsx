import React from "react";
import { useState, useEffect, useRef } from "react";
import { BlogPosts } from "./BlogPosts";
import { v4 as uuidv4 } from "uuid";
import "./MyBlog.css";
import { BlogList } from "./BlogList";
import "./blog.css";

const LOCAL_STORAGE_KEY = "myBlog.posts";

export const MyBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const [posts, setPosts] = useState([]);

  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPosts) setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    //prevents from refreshing the page
    // e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    if (title === "" || content === "" || author === "" || date === "") return;
    console.log(title, content, author, date);
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

    // clears the output with 'null'
    titleRef.current.value = null;
    contentRef.current.value = null;
    authorRef.current.value = null;
    dateRef.current.value = null;

    const blog = { title, content, author, date };

    console.log(blog);
    console.log(posts);
  };
  return (
    <>
      <div className="container">
        <div className="create-post">
          <h2>Add a new Post </h2>
          <form onSubmit={handleSubmit}>
            <label>
              Blog title:
              <input
                ref={titleRef}
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Blog Content:
              <textarea
                ref={contentRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                ref={dateRef}
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
