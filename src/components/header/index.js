import React, { useState } from "react";
import cn from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PropTypes from "prop-types";

import Logo from "../logo";

import "./index.scss";

const Header = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > (window.innerHeight / 2) * -1;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  return (
    <div
      className={cn("Header", {
        fixed: !hideOnScroll,
      })}
    >
      <div
        className={cn("Header__container", {
          fixed: !hideOnScroll,
        })}
      >
        <Logo motion={hideOnScroll} />
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
