import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Logo from "../logo";

import "./index.scss";

const Header = () => {
  return (
    <div className={cn("Header")}>
      <div className={cn("Header__container")}>
        <Logo motion />
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
