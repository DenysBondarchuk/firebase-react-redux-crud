import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../Form';
import Portal from '../Portal';

import './styles.scss';

//---------------------------------------------------------------------------------------------------------------------

const Modal = () => {

  const isShown = useSelector(state => state.modalReducer.isShown);

  return (
    <>
      {isShown && (
        <Portal selector="#portal">
          <div className="modal__overlay">
            <div className="modal">
              <div className="modal__body">
                <Form />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
