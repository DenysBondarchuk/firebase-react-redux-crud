import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { SITE_PATH } from '../../constants/paths';

//---------------------------------------------------------------------------------------------------------------------

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={SITE_PATH.SIGN_IN} />
        )
      }
    />
  );
};

export default PrivateRoute;
