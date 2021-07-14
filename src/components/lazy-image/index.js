import React, { useState, useEffect } from "react";
import "./index.scss";
import cn from "classnames";

const LazyImage = ({ src, alt, className, style, onClick }) => {
  const [isLoaded, setisLoaded] = useState(false);
  const onLoad = (event) => {
    setisLoaded(true);
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };
  return (
    <img
      className={cn(
        "LazyImage",
        {
          clickable: onClick,
        },
        className
      )}
      src={src}
      style={{
        opacity: isLoaded ? 1 : 0,
        filter: `blur:(${isLoaded ? 0 : "2rem"})`,
        ...style,
      }}
      alt={alt}
      draggable={false}
      onLoad={onLoad}
      onClick={onClick}
      onError={onError}
    />
  );
};

export default LazyImage;
