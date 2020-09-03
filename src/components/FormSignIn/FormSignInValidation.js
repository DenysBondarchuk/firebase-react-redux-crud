import * as yup from 'yup';

// --------------------------------------------------------------------------------------------------------------------

const REQUIRED = 'Required';
const EMAIL_ERROR = 'Please enter a valid email address';
const PASSWORD_ERROR = 'Password must be at least with 6 characters';

// --------------------------------------------------------------------------------------------------------------------

const initialValues = {
  email: '',
  password: '',
};

// --------------------------------------------------------------------------------------------------------------------

const validationSchema = yup.object({

  email: yup.string()
    .required(REQUIRED)
    .email(EMAIL_ERROR),

  password: yup.string()
    .required(REQUIRED)
    .min(6, PASSWORD_ERROR)

});

// ------------------------------------------------------------------------------------------------

export default {
  initialValues,
  validationSchema,
};
