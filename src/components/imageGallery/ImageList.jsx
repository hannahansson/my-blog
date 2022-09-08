import React from "react";
import { BlogContent } from "../blog/BlogContent";
import { MyImage } from "./MyImage";

export const ImageList = ({ imageUrls }) => {
  return imageUrls.map((imageSrc, index) => {
    return <MyImage key={index} image={imageSrc} />;
  });
};
