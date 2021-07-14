import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";
import LazyImage from "../lazy-image/index";

const LazyVideo = ({
  source = "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
  children,
  style,
  className,
  ref,
}) => {
  const [canPlay, setCanPlay] = useState(false);
  return (
    <div
      className={cn("LazyVideo", className)}
      style={{ opacity: canPlay ? 1 : 0, ...style }}
    >
      <video
        ref={ref}
        autoPlay={true}
        loop={true}
        muted={true}
        onCanPlay={() => setCanPlay(true)}
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

LazyVideo.propTypes = {};

LazyVideo.defaultProps = {};

export default LazyVideo;
