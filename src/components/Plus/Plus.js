import React from 'react';
import { useDispatch } from 'react-redux';

import { itemCreate } from '../../store/actions';
import './styles.scss';

//---------------------------------------------------------------------------------------------------------------------

const Plus = () => {

  const dispatch = useDispatch();
  const createItem = () => dispatch(itemCreate());

  return (
    <button
      className="plus"
      onClick={createItem}
    />
  );
};

export default Plus;
