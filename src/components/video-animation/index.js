import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { FaExpand } from "react-icons/fa";

import "./index.scss";

import imgPlayButton from "./images/play-button.png";
import LazyImage from "../lazy-image/index";

const VideoAnimation = ({ src, timePause = 0, poster }) => {
  const [canPlay, setCanPlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [onPlayed, setOnPlayed] = useState(false);
  const [onExpanded, setOnExpanded] = useState(false);

  const showHidePlay = () => {
    setOnPlayed(true);
    setTimeout(() => setOnPlayed(false), 400);
  };
  const onEndVideo = (el) => (el.currentTarget.currentTime = timePause);
  const onVideoClick = (e) =>
    e.currentTarget.paused ? e.target.play() : e.target.pause();
  const handleExpandClick = (ev) => {
    setOnExpanded(!onExpanded);
  };

  return (
    <div
      className={cn("VideoAnimation", {
        "VideoAnimation--expanded": onExpanded,
      })}
    >
      <LazyImage
        src={imgPlayButton}
        className={cn("VideoAnimation__play", {
          "VideoAnimation__play--visible": onPlayed,
        })}
      />
      <FaExpand
        onClick={handleExpandClick}
        className={cn("VideoAnimation__expand", {
          "VideoAnimation__expand--expanded": onExpanded,
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
        onCanPlay={() => setIsLoaded(true)}
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
