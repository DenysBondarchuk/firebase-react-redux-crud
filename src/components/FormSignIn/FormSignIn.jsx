import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Formik } from 'formik';

import InputText from '../InputText';
import Button from '../Button';

import FormSignInValidation from './FormSignInValidation';
import { app } from '../../services/firebase';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const FormSignIn = ({ history }) => {

  const handleLogin = useCallback(
    async (values) => {
      try {
        await app.auth().signInWithEmailAndPassword(values.email, values.password);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div className="sign-in">
      <h1 className="sign-in__title">Please Sign In</h1>
      <Formik
        initialValues={FormSignInValidation.initialValues}
        validationSchema={FormSignInValidation.validationSchema}
        onSubmit={values => handleLogin(values)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit} className="sign-in__form">
            <div className="form__item">
              <InputText
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                text="Email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
              />
            </div>
            <div className="form__item">
              <InputText
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                text="Password"
                onChange={handleChange}
                value={values.password}
                error={errors.password}
              />
            </div>
            <Button
              type="submit"
              text="Submit"
              variant="secondary"
              className="sign-in__btn"
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(FormSignIn);
