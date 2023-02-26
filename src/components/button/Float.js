import React from "react";
import PropTypes from "prop-types";

import "./Float.scss";
import { FaComments } from "react-icons/fa";

const ButtonFloat = ({ children, href }) => (
  <a href={href} target="_blank" className="ButtonFloat">
    <span className="ButtonFloat__content">{children}</span>
    <FaComments className="ButtonFloat--icon" />
  </a>
);

ButtonFloat.propTypes = {};

ButtonFloat.defaultProps = {};

export default ButtonFloat;
