import React from "react";
import { useState, useEffect } from "react";
import { BlogContent } from "../blog/BlogContent";
import { BlogPosts } from "../blog/BlogPosts";
import { ImageList } from "../imageGallery/ImageList";

const LOCAL_STORAGE_KEY = "myBlog.images";

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;

    const newImagesUrls = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newImagesUrls));
    setImageUrls(newImagesUrls);
    console.log(newImagesUrls);
  }, [images]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedImages) setImageUrls(storedImages);
  }, []);

  /*useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(imageUrls));
  }, [imageUrls]);*/

  const handleImage = (e) => {
    setImages([...e.target.files]);
  };

  /* {imageUrls.map((imageSrc, index) => (
        <img key={index} src={imageSrc} />
      ))}*/
  return (
    <>
      <form>
        <div className="container-image">
          <input type="file" multiple accept="image/*" onChange={handleImage} />
          {imageUrls.map((imageSrc, index) => (
            <img key={index} src={imageSrc} />
          ))}
          <ImageList imageUrls={imageUrls} />{" "}
        </div>
      </form>
    </>
  );
};
