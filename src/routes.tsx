import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './screens/Detail';
import Home from './screens/Home';
import Points from './screens/Points';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={Points} name="Points" />
        <AppStack.Screen component={Detail} name="Detail" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
