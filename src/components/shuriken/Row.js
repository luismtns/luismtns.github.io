import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Row.scss";
import Shuriken from "./index";

const ShurikenRow = ({ items, className, striped, rotate }) => (
  <div className={cn("ShurikenRow", className)}>
    {Array.from(Array(items).keys()).map((e, i) => (
      <Shuriken
        rotate={rotate}
        delay={i * 120}
        type={striped ? "striped" : ""}
      />
    ))}
  </div>
);

ShurikenRow.propTypes = {};

ShurikenRow.defaultProps = {};

export default ShurikenRow;
