import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

import "./index.scss";

import Text from "../text/index";

const cursorConfig = {
  show: false,
  blink: false,
  element: "",
  hideWhenDone: false,
  hideWhenDoneDelay: 0,
};
const TypingAnimator = ({ children }) => (
  <Typist
    avgTypingDelay={55}
    stdTypingDelay={0}
    startDelay={600}
    cursor={cursorConfig}
    className="TypingAnimator"
  >
    <Text>{children}</Text>
  </Typist>
);

TypingAnimator.propTypes = {};

TypingAnimator.defaultProps = {};

export default TypingAnimator;
