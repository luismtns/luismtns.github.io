import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Loader from '@components/loader';

import './index.scss';

const Button = ({children, onClick, isLoading, fluid, disabled, type}) => {
  return (
    <div className={cn(
      'Button',
      {
        'Button--fluid': fluid,
        'Button--disabled': disabled,
      }
    )}>
    {
      isLoading ?
        <div className="Button__loader"><Loader visible /></div>
      :
        <button
          onClick={disabled ? null : onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
    }
    </div>
  );
}

Button.propTypes = {};

Button.defaultProps = {
  disabled: false,
  type: 'button',
};

export default Button;
