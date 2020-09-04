import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Page404 from './pages/Page404';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { SITE_PATH } from './constants/paths';

//---------------------------------------------------------------------------------------------------------------------

const App = () => {

  return (
    <AuthProvider>
      <HashRouter>
        <Switch>

          <PrivateRoute exact path={SITE_PATH.HOME} component={Home} />
          <Route exact path={SITE_PATH.SIGN_IN} component={SignIn} />
          <Route component={Page404} />

        </Switch>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
