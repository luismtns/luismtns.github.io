import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";

const Lightbox = ({ children, onClose, visible }) => (
  <div
    className={cn("Lightbox", {
      "Lightbox--visible": visible,
    })}
  >
    <span onClick={onClose} className="close">
      &times;
    </span>
    {children}
  </div>
);

Lightbox.propTypes = {};

Lightbox.defaultProps = {};

export default Lightbox;
