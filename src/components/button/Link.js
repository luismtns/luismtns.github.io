import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./Link.scss";

const ButtonLink = ({ to, children, className }) => (
  <Link to={to} className={cn("ButtonLink", className)}>
    {children}
  </Link>
);

ButtonLink.propTypes = {};

ButtonLink.defaultProps = {};

export default ButtonLink;
