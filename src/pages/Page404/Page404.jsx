import React from 'react';
import { Link } from 'react-router-dom';

import { SITE_PATH } from '../../constants/paths';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const Page404 = () => (
  <div className="error404">
    <div className="error404__wrapper">
      <h1 className="error404__title">404</h1>
      <Link className="error404__btn" to={SITE_PATH.HOME}>Home</Link>
    </div>
  </div>
);

export default Page404;
