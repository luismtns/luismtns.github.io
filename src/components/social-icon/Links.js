import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Links.scss";
import SocialIcon from ".";

const SocialIconLinks = ({ className }) => {
  const socialLinks = [
    {
      type: "twitter",
      url: "https://twitter.com/luismtns",
    },
    {
      type: "behance",
      url: "https://www.behance.net/luismtns",
    },
    {
      type: "github",
      url: "https://github.com/luismtns/",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/luismtns/",
    },
    {
      type: "download",
      url: "files/luis-bovo-cv.pdf",
    },
  ];

  return (
    <div className={cn("SocialIconLinks", className)}>
      {socialLinks.map((e) => (
        <SocialIcon key={e.type} type={e.type} url={e.url} />
      ))}
    </div>
  );
};

SocialIconLinks.propTypes = {};

SocialIconLinks.defaultProps = {};

export default SocialIconLinks;
