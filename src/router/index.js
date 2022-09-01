import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PrivateRoutes} from './private';
import {PublicRoutes} from './public';

const Router = () => {
  const userLoged = true;

  return (
    <NavigationContainer>
      {userLoged ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Router;
