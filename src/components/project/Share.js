import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

import "./Share.scss";
import Text from "../text/index";

const ProjectShare = ({ entry }) => {
  const location = useLocation();
  const postUrl = window.location.href;
  return (
    <div className="ProjectShare">
      <Text className="ProjectShare__title">
        <h4>Compartilhar</h4>
      </Text>
      <div className="ProjectShare__flex">
        <FacebookShareButton url={postUrl}>
          <FaFacebook className="Btn--Facebook" />
        </FacebookShareButton>
        <LinkedinShareButton url={postUrl}>
          <FaLinkedin className="Btn--Linkedin" />
        </LinkedinShareButton>
        <PinterestShareButton url={postUrl}>
          <FaPinterest className="Btn--Pinterest" />
        </PinterestShareButton>
        <TwitterShareButton url={postUrl}>
          <FaTwitter className="Btn--Twitter" />
        </TwitterShareButton>
      </div>
    </div>
  );
};

ProjectShare.propTypes = {};

ProjectShare.defaultProps = {};

export default ProjectShare;
