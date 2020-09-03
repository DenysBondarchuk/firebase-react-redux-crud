import React from 'react';

import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const InputLabel = ({ id, text }) => (
  <label htmlFor={id} className="input-label">
    {text}
  </label>
);

export default InputLabel;
