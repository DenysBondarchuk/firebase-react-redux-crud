import React from 'react';

import Textarea from '../../Textarea';

// --------------------------------------------------------------------------------------------------------------------

const FormNotRequiredFields = ({ values, errors, handleChange }) => (
  <>
    <div className="form__item">
      <Textarea
        type="text"
        name="compositionAndFormOfRelease"
        placeholder="Composition and release form"
        id="compositionAndFormOfRelease"
        text="Composition and release form"
        onChange={handleChange}
        value={values.compositionAndFormOfRelease}
        error={errors.compositionAndFormOfRelease}
      />
    </div>
    <div className="form__item">
      <Textarea
        type="text"
        name="indication"
        placeholder="Indication"
        id="indication"
        text="Indication"
        onChange={handleChange}
        value={values.indication}
        error={errors.indication}
      />
    </div>
    <div className="form__item">
      <Textarea
        type="text"
        name="сontrandications"
        placeholder="Contrandications"
        id="сontrandications"
        text="Contrandications"
        onChange={handleChange}
        value={values.сontrandications}
        error={errors.сontrandications}
      />
    </div>
  </>
);

export default FormNotRequiredFields;
