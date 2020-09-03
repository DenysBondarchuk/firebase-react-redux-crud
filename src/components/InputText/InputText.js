import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import InputError from '../InputError';
import InputLabel from '../InputLabel';

import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const InputText = ({ type, id, name, placeholder, onChange, error, text, value }) => {
  const [selfValue, setSelfValue] = useState('');

  const inputChangeHandler = useCallback(e => {
    setSelfValue(e.currentTarget.value);
  }, []);

  const change = onChange ? onChange : inputChangeHandler;
  const val = value ? value : selfValue;

  const inputClasses = classNames(
    'input-text',
    { [`input-text--error`]: error },
  );

  return (
    <div className={inputClasses}>
      <InputLabel id={id} text={text} />
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={change}
        autoComplete="off"
      />
      <InputError error={error} />
    </div>
  );
};

export default InputText;
