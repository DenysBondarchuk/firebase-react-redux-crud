import React, { useCallback } from 'react';
import classNames from 'classnames';

import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const Button = ({ type, text, variant, disabled, className, onClick }) => {

  const clickHandler = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  const inputClasses = classNames(
    'btn',
    { [`btn-${variant}`]: variant },
    { [`${className}`]: className },
  );

  return (
    <button
      type={type}
      className={inputClasses}
      disabled={disabled}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
