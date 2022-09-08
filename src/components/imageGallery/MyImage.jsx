import React, { useState, useEffect } from "react";
import { ImageList } from "./ImageList";

export const MyImage = ({ image }) => {
  return (
    <div>
      <img src={image} />
    </div>
  );
};
