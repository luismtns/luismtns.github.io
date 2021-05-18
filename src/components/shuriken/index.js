import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";
import imgShuriken from "./images/shuriken.png";
import imgStriped from "./images/striped.png";
import LazyImage from "../lazy-image";

const Shuriken = ({ type = "", rotate, delay }) => (
  <div
    className={cn("Shuriken", {
      rotate: rotate,
    })}
    style={{
      animationDelay: `${delay}ms`,
    }}
  >
    {!type && <LazyImage src={imgShuriken} />}
    {type == "striped" && <LazyImage src={imgStriped} />}
  </div>
);

Shuriken.propTypes = {};

Shuriken.defaultProps = {};

export default Shuriken;
