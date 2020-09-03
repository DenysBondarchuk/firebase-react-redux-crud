import * as yup from 'yup';

// --------------------------------------------------------------------------------------------------------------------

const REQUIRED = 'required';
const CODE_ERROR = 'String from 5 to 10 characters';
const NAME_ERROR = 'String from 5 to 100 characters';
const PRICE_ERROR = 'A number ranging from 0.01 to 1,000,000';
const SHELF_LIFE_ERROR = 'Must be an integer number from 1 to 1000';
const RELEASE_ERROR = 'String up to 2000 characters';
const TYPE_ERROR = 'Please enter a valid number';

// --------------------------------------------------------------------------------------------------------------------

const initialValues = {
  code: '',
  name: '',
  price: '',
  shelfLife: '',
  compositionAndFormOfRelease: '',
  indication: '',
  сontrandications: '',
};

// --------------------------------------------------------------------------------------------------------------------

const validationSchema = yup.object({

  code: yup.string()
    .required(REQUIRED)
    .min(5, CODE_ERROR)
    .max(10, CODE_ERROR),

  name: yup.string()
    .required(REQUIRED)
    .min(5, NAME_ERROR)
    .max(100, NAME_ERROR),

  price: yup.number()
    .required(REQUIRED)
    .min(0.01, PRICE_ERROR)
    .max(1000000, PRICE_ERROR)
    .typeError(TYPE_ERROR),

  shelfLife: yup.number()
    .required(REQUIRED)
    .integer(SHELF_LIFE_ERROR)
    .min(1, SHELF_LIFE_ERROR)
    .max(1000, SHELF_LIFE_ERROR),

  compositionAndFormOfRelease: yup.string()
    .max(2000, RELEASE_ERROR),

  indication: yup.string()
    .max(2000, RELEASE_ERROR),

  сontrandications: yup.string()
    .max(2000, RELEASE_ERROR),

});

// --------------------------------------------------------------------------------------------------------------------

export default {
  initialValues,
  validationSchema,
};
