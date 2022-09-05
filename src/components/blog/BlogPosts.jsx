import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from "react";
import { BlogContent } from "./BlogContent";
import { BlogList } from "./BlogList";
import { MyBlog} from "./MyBlog";

export const BlogPosts = () => {
    return (
        <div>
        <MyBlog />
        </div>
    )
  }