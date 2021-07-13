import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";

import bgVideoMp4 from "./video/backgroundvideo.mp4";
import bgVideoWebm from "./video/backgroundvideo.webm";

const BackgroundVideo = ({ children }) => {
  const [blurVideo, setBlurVideo] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setTimeout(() => setBlurVideo(false), 300);
    };

    const onScroll = () => {
      if (!blurVideo) {
        setBlurVideo(true);
        window.requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [blurVideo, window]);

  return (
    <div className="BackgroundVideo">
      <video
        className={cn("BackgroundVideo__video", {
          "BackgroundVideo__video--blur": blurVideo,
        })}
        autoPlay={true}
        playsInline={true}
        controls={false}
        muted={true}
        loop={true}
      >
        <source src={bgVideoMp4} type="video/mp4" />
        <source src={bgVideoWebm} type="video/webm" />
      </video>
    </div>
  );
};
BackgroundVideo.propTypes = {};

BackgroundVideo.defaultProps = {};

export default BackgroundVideo;
