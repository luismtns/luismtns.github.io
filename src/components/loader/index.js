import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './index.scss';

const Loader = ({visible, white, small}) => (
  visible && <div className={cn('Loader', {'Loader--white': white, 'Loader--small': small})}>
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  </div>
);

Loader.propTypes = {};

Loader.defaultProps = {
  white: false,
  visible: false,
  small: false,
};

export default Loader;
