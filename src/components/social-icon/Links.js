import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Links.scss";
import SocialIcon from ".";

const SocialIconLinks = ({ className }) => {
  const socialLinks = [
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/luismtns/",
      title: "LinkedIn",
    },
    {
      type: "github",
      title: "Github",
      url: "https://github.com/luismtns/",
    },
    {
      type: "behance",
      title: "Behance",
      url: "https://www.behance.net/luismtns",
    },
    {
      type: "download",
      title: "Currículo",
      url: "files/luis-bovo-cv-2023.pdf",
    },
  ];

  return (
    <div className={cn("SocialIconLinks", className)}>
      {socialLinks.map((e) => (
        <SocialIcon key={e.type} type={e.type} url={e.url} title={e.title} />
      ))}
    </div>
  );
};

SocialIconLinks.propTypes = {};

SocialIconLinks.defaultProps = {};

export default SocialIconLinks;
