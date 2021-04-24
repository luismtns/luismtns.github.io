import React, { useState, useEffect } from "react";
import "./index.scss";
import cn from "classnames";

const LazyImage = ({ src, alt, className, style, onClick }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add("loaded");
    setTimeout(() => {
      event.target.classList.remove("loaded");
    }, 300);
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return (
    <img
      className={cn(
        "LazyImage",
        {
          clickable: onClick,
        },
        className
      )}
      ref={setImageRef}
      src={imageSrc}
      style={style}
      alt={alt}
      draggable={false}
      onLoad={onLoad}
      onClick={onClick}
      onError={onError}
    />
  );
};

export default LazyImage;
