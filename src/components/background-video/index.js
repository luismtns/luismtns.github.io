import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

import bgVideoMp4 from "./video/backgroundvideo.mp4";
import bgVideoWebm from "./video/backgroundvideo.webm";

const BackgroundVideo = ({ children }) => (
  <div className="BackgroundVideo">
    <video className="BackgroundVideo__video" autoPlay muted loop>
      <source src={bgVideoMp4} type="video/mp4" />
      <source src={bgVideoWebm} type="video/webm" />
    </video>
  </div>
);

BackgroundVideo.propTypes = {};

BackgroundVideo.defaultProps = {};

export default BackgroundVideo;
