import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Link.scss';

const ButtonLink = ({to, children}) => (
  <Link to={to} className="ButtonLink">
    {children}
  </Link>
);

ButtonLink.propTypes = {};

ButtonLink.defaultProps = {};

export default ButtonLink;
