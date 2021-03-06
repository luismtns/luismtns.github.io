import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";

import LogoGengarOutlineImage from "./images/Logo__gengar--outline.png";
import LogoGengarImage from "./images/Logo__gengar.png";
import LogoTypoImage from "./images/Logo__typo.png";
import LogoCircleImage from "./images/Logo__circle.png";

import LogoStatic from "./images/logo-luis-bovo.png";

import LazyImage from "../lazy-image";
import TypingAnimator from "./../typing-animator/index";

const Logo = ({ motion }) => {
  const [ClientXGengar, setClientXGengar] = useState(0);
  const [ClientYGengar, setClientYGengar] = useState(0);

  useEffect(() => {
    let timer = null;
    const handleMouseMove = (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setClientXGengar(Math.floor(window.innerWidth / 2 - e.clientX) * 0.05);
        setClientYGengar(Math.floor(window.innerHeight / 5 - e.clientY) * 0.05);
      }, 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <React.Fragment>
      {motion && (
        <div className={"Logo"}>
          <div className="Logo--wrap">
            <LazyImage
              style={{
                transform: `translate(${-(ClientXGengar / 3)}px,${-(
                  ClientYGengar / 3
                )}px)`,
              }}
              src={LogoTypoImage}
              className="Logo__typo"
              alt="Luis Bovo designer and developer logo circle"
            />
            <LazyImage
              style={{
                transform: `rotate(${ClientYGengar + 2}deg)`,
              }}
              src={LogoCircleImage}
              className="Logo__circle"
              alt="Luis Bovo designer and developer logo circle"
            />
            <LazyImage
              style={{
                transform: `translate(${ClientXGengar}px,${ClientYGengar}px)`,
              }}
              src={LogoGengarImage}
              className="Logo__gengar"
              alt="Luis Bovo designer and developer logo circle"
            />
          </div>
        </div>
      )}
      {!motion && (
        <LazyImage
          src={LogoStatic}
          alt="Luis Bovo designer and developer Logo"
        />
      )}
    </React.Fragment>
  );
};

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
