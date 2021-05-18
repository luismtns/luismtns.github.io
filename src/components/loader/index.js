import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";
import ShurikenRow from "../shuriken/Row";

const Loader = ({ visible, white, small }) =>
  visible && (
    <div
      className={cn("Loader", {
        "Loader--white": white,
        "Loader--small": small,
      })}
    >
      <ShurikenRow items={1} striped rotate />
    </div>
  );

Loader.propTypes = {};

Loader.defaultProps = {
  white: false,
  visible: false,
  small: false,
};

export default Loader;
