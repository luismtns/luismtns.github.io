import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

import "./index.scss";

import Text from "../text/index";

const cursorConfig = {
  show: false,
  blink: true,
  element: "",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};
const TypingAnimator = ({ children }) => (
  <Typist avgTypingDelay={65} cursor={cursorConfig} className="TypingAnimator">
    <Text>{children}</Text>
  </Typist>
);

TypingAnimator.propTypes = {};

TypingAnimator.defaultProps = {};

export default TypingAnimator;
