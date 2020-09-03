import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import InputLabel from '../InputLabel';
import InputError from '../InputError';

import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const Textarea = ({ placeholder, text, error, id, disabled, name, onChange, value }) => {
  const [selfValue, setSelfValue] = useState('');

  const textareaChangeHandler = useCallback(e => {
    setSelfValue(e.currentTarget.value);
  }, []);

  const inputClasses = classNames(
    'textarea',
    { [`textarea--error`]: error },
  );

  const change = onChange ? onChange : textareaChangeHandler;
  const val = value ? value : selfValue;

  return (
    <div className={inputClasses}>
      <InputLabel id={id} text={text} />
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={change}
        value={val}
        rows="3"
      />
      <InputError error={error} />
    </div>
  );
};

export default Textarea;
