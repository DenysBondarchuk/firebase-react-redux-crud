import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import {AuthContext} from "../../context/AuthContext";
import {sitePath} from "../../constants/paths";

//---------------------------------------------------------------------------------------------------------------------

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={sitePath.signIn} />
        )
      }
    />
  );
};

export default PrivateRoute
