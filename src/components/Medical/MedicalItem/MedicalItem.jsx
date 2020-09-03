import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../Button';

import { deleteItem, editItemStart } from '../../../store/actions';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const MedicalItem = ({ value }) => {
  const dispatch = useDispatch();

  const { id, code, name, price } = value;

  const handleEdit = () => dispatch(editItemStart(id));
  const handleDelete = () => dispatch(deleteItem(id));

  const subItems = [
    {
      title: 'Code', value: code,
    },
    {
      title: 'Name', value: name,
    },
    {
      title: 'Price', value: price,
    },
  ];

  return (
    <li className="medical-item">
      <div className="medical-item__list">
        {
          subItems.map(({ title, value }, index) => (
            <div className="medical-item__block" key={index}>
              <span className="medical-item__title">{title}:</span>
              <span className="medical-item__value" title={value}>{value}</span>
            </div>
          ))
        }
      </div>
      <div className="medical-item__controls">
        <Button type="button" text="Edit" variant="secondary" onClick={handleEdit} />
        <Button type="button" text="Delete" variant="danger" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default MedicalItem;
