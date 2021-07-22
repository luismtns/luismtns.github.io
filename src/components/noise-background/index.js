import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./index.scss";
import imgNoise from "./images/noise.jpg";

const NoiseBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={cn("NoiseBackground")} hidden={!isLoaded}>
      <img
        onLoad={() => setIsLoaded(true)}
        src={imgNoise}
        alt={"noise background"}
        hidden={true}
      />
    </div>
  );
};

NoiseBackground.propTypes = {};

NoiseBackground.defaultProps = {};

export default NoiseBackground;
