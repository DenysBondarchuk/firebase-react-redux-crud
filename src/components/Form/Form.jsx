import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import FormRequiredFields from './FormRequiredFields';
import FormNotRequiredFields from './FormNotRequiredFields';
import Button from '../Button';

import FormValidation from './FormValidation';
import { addItem, updateItem } from '../../store/actions';
import { toggleModal } from '../../store/actions/modalActions';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const Form = () => {
  const dispatch = useDispatch();
  const medicalEdit = useSelector(state => state.medicalReducer.editItem);

  const handleAdd = (values) => dispatch(addItem(values));
  const handleUpdate = (payload) => dispatch(updateItem(payload));
  const handleToggle = () => dispatch(toggleModal());

  const formSubmit = medicalEdit ? handleUpdate : handleAdd;

  const [showRequired, setShowRequired] = useState(true);
  const handleShow = useCallback(() => {
    setShowRequired(!showRequired);
  }, [showRequired]);

  return (
    <>
      <h2 className="form__title">
        {medicalEdit ? 'Edit' : 'Add'} medicine item {showRequired ? '1' : '2'}/2
      </h2>

      <Formik
        initialValues={medicalEdit ? medicalEdit : FormValidation.initialValues}
        validationSchema={FormValidation.validationSchema}
        onSubmit={values => formSubmit(values)}
        enableReinitialize={true}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>
            {
              showRequired ? (
                <FormRequiredFields errors={errors} values={values} handleChange={handleChange} />
              ) : (
                <FormNotRequiredFields errors={errors} values={values} handleChange={handleChange} />
              )
            }
            <div className="form__controls">
              <Button
                type="button"
                text="Cancel"
                variant="secondary"
                onClick={handleToggle}
              />
              <Button
                type="button"
                text={showRequired ? 'Next' : 'Prev'}
                variant="secondary"
                onClick={handleShow}
              />
              <Button
                type="submit"
                text={medicalEdit ? 'Edit' : 'Create'}
                variant="secondary"
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
