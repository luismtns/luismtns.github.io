import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

import "./index.scss";
const cursorConfig = {
  show: false,
  blink: true,
  element: "",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};
const TypingAnimator = ({ children }) => (
  <Typist avgTypingDelay={55} cursor={cursorConfig} className="TypingAnimator">
    {children}
  </Typist>
);

TypingAnimator.propTypes = {};

TypingAnimator.defaultProps = {};

export default TypingAnimator;
