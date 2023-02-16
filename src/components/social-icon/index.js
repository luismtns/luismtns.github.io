import React from "react";
import PropTypes from "prop-types";
import {
  FaTwitter,
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

import "./index.scss";

const SocialIcon = ({ type, url, download }) =>
  type == "download" ? (
    <a href={url} className="SocialIcon" target="_blank" download>
      <FaFileDownload />
    </a>
  ) : (
    <a href={url} className="SocialIcon" target="_blank">
      {type == "twitter" && <FaTwitter />}
      {type == "behance" && <FaBehance />}
      {type == "github" && <FaGithub />}
      {type == "linkedin" && <FaLinkedin />}
    </a>
  );

SocialIcon.propTypes = {};

SocialIcon.defaultProps = {};

export default SocialIcon;
