import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";

import imgPlayButton from "./images/play-button.png";
import LazyImage from "../lazy-image/index";

const VideoAnimation = ({ src, timePause = 0, poster }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [OnPlayed, setOnPlayed] = useState(false);
  const showHidePlay = () => {
    setOnPlayed(true);
    setTimeout(() => setOnPlayed(false), 400);
  };
  const onEndVideo = (el) => (el.currentTarget.currentTime = timePause);
  const onVideoClick = (e) =>
    e.currentTarget.paused ? e.target.play() : e.target.pause();
  return (
    <div className="VideoAnimation">
      <LazyImage
        src={imgPlayButton}
        className={cn("VideoAnimation__play", {
          "VideoAnimation__play--visible": OnPlayed,
        })}
      />
      <video
        className="videoTag"
        autoPlay
        muted
        loop
        poster={poster}
        onClick={onVideoClick}
        onPlay={showHidePlay}
        onPause={showHidePlay}
        onLoadedMetadata={() => setIsLoaded(true)}
        onEnded={onEndVideo}
        className={cn("VideoAnimation__video", {
          "VideoAnimation__video--isLoaded": isLoaded,
        })}
      >
        <source
          src={`${src}#t=0.1`}
          type={`video/${src.split(".")[src.split(".").length - 1]}`}
        />
      </video>
    </div>
  );
};

VideoAnimation.propTypes = {};

VideoAnimation.defaultProps = {};

export default VideoAnimation;
