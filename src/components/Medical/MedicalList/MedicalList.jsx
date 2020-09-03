import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MedicalItem from '../MedicalItem';
import Loader from '../../Loader';

import { dataFetch } from '../../../store/actions';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const MedicalList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  const medicalData = useSelector(state => state.medicalReducer.medicalList);
  const medicalDataLoader = useSelector(state => state.medicalReducer.loading);

  return (
    <div className="medical-list">
      <div className="container">
        <h2 className="medical-list__title">Medical list</h2>

        {medicalDataLoader && <Loader />}

        <ul className="medical-list__catalog">
          {
            medicalData && medicalData.map(item => {
              return (
                <MedicalItem
                  key={item.id}
                  value={item}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default MedicalList;
