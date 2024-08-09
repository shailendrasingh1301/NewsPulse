import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import FullScreenLoader from '../components/FullScreenLoader.js';
import {navigationRef} from './helper';
import {ROUTES} from '../utils/routes';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function AppNavigator() {
  const {isLoggedIn} = useSelector(store => store?.user);
  const {showFullLoader} = useSelector(store => store?.common);
  const appearance = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={appearance === 'dark' ? '#1C1C1C' : '#FFFFFF'}
      />
      {showFullLoader && <FullScreenLoader />}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={ROUTES.HOME} component={Home} />
              <Stack.Screen name={ROUTES.DETAIL} component={Detail} />
            </>
          ) : (
            <>
              <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
