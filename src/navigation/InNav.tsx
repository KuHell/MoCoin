import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CoinDetail from '../components/coin/CoinDetail';

const Stack = createStackNavigator();

function InNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#111',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoinDetail" component={CoinDetail} />
    </Stack.Navigator>
  );
}

export default InNav;
