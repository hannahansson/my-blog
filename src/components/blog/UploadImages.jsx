import React from "react";
import { useState, useEffect } from "react";

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;

    const newImagesUrls = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImagesUrls);
  }, [images]);

  const handleImage = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={handleImage} />

      {imageUrls.map((imageSrc, index) => (
        <img key={index} src={imageSrc} />
      ))}
    </>
  );
};
