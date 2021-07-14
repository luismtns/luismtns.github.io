import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Fade from "react-reveal/Fade";

import "./index.scss";
import ShurikenRow from "../shuriken/Row";
import TypingAnimator from "../typing-animator";

const Loader = ({ visible, white, small, full }) =>
  visible && (
    <div
      className={cn("Loader", {
        "Loader--white": white,
        "Loader--small": small,
        "Loader--full": full,
      })}
    >
      <Fade>
        <ShurikenRow items={1} striped rotate />
      </Fade>
      {full && (
        <Fade delay={800}>
          <TypingAnimator>
            <h2>Seja bem vindo.</h2>
          </TypingAnimator>
        </Fade>
      )}
      <Fade delay={200}>
        <ShurikenRow items={1} striped rotate />
      </Fade>
    </div>
  );

Loader.propTypes = {};

Loader.defaultProps = {
  white: false,
  visible: false,
  small: false,
};

export default Loader;
