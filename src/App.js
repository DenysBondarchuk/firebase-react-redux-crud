import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Page404 from "./pages/Page404";

import {AuthProvider} from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import {sitePath} from "./constants/paths";
import { createBrowserHistory } from "history";



const App = () => {
  const history = createBrowserHistory();

  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>

          <PrivateRoute exact path={sitePath.home} component={Home}/>
          <Route exact path={sitePath.signIn} component={SignIn}/>
          <Route component={Page404}/>

        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
