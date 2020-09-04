import React from 'react';

import Header from '../../components/Header';
import MedicalList from '../../components/Medical/MedicalList';
import Modal from '../../components/Modal';
import Plus from '../../components/Plus';

//---------------------------------------------------------------------------------------------------------------------

const Home = () => {

  return (
    <div>
      <Header />

      <MedicalList />
      <Modal />
      <Plus />
    </div>
  );
};

export default Home;
