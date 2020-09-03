import React, {useContext} from "react";
import {Redirect} from "react-router";

import {AuthContext} from "../../context/AuthContext";
import FormSignIn from "../../components/FormSignIn";

import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    currentUser ? <Redirect to="/" /> : <FormSignIn />
  )
};

export default SignIn;
