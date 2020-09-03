import React from 'react';

import InputText from '../../InputText';

// --------------------------------------------------------------------------------------------------------------------

const FormRequiredFields = ({ values, errors, handleChange }) => (
  <>
    <div className="form__item">
      <InputText
        type="text"
        name="code"
        placeholder="Code"
        id="code"
        text="Code"
        onChange={handleChange}
        value={values.code}
        error={errors.code}
      />
    </div>
    <div className="form__item">
      <InputText
        type="text"
        name="name"
        placeholder="Name"
        id="name"
        text="Name"
        onChange={handleChange}
        value={values.name}
        error={errors.name}
      />
    </div>
    <div className="form__item">
      <InputText
        type="text"
        name="price"
        placeholder="Price"
        id="price"
        text="Price"
        onChange={handleChange}
        value={values.price}
        error={errors.price}
      />
    </div>
    <div className="form__item">
      <InputText
        type="number"
        name="shelfLife"
        placeholder="Expiration date"
        id="shelfLife"
        text="Expiration date"
        onChange={handleChange}
        value={values.shelfLife}
        error={errors.shelfLife}
      />
    </div>
  </>
);

export default FormRequiredFields;
