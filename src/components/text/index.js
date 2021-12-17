import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";

const Text = ({ children, align = "left", className, style, monument }) => (
  <div
    className={cn(
      "Text",
      {
        monument: monument,
      },
      className
    )}
    style={{ ...style, textAlign: align }}
  >
    {children}
  </div>
);

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
