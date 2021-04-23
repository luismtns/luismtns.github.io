import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

import './index.scss';

const Text = ({children, className, style, monument}) => (
  <div className={cn("Text",{
    "monument": monument
  }, className)} style={style}>
    {children}
  </div>
);

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
