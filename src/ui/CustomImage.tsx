import React, { useState, useEffect } from "react";
import { ImageBaseURL } from "../api/utils/config";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, ...props }) => {

  const [imgSrc, setImgSrc] = useState<any>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src,props]);



  const newImage = ImageBaseURL + (imgSrc?.replace("public", "/storage"))


  return (
    <img
      src={newImage}
      {...props}
      alt="there is no image"
    />
  );
};

export default CustomImage;
