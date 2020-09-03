import React from 'react';
import { Route, HashRouter} from "react-router-dom";
import {Switch} from "react-router";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Page404 from "./pages/Page404";

import {AuthProvider} from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import {sitePath} from "./constants/paths";

//---------------------------------------------------------------------------------------------------------------------

const App = () => {

  return (
    <AuthProvider>
      <HashRouter>
        <Switch>

          <PrivateRoute exact path={sitePath.home} component={Home}/>
          <Route exact path={sitePath.signIn} component={SignIn}/>
          <Route component={Page404}/>

        </Switch>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
