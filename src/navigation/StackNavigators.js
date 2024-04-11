import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Home = createNativeStackNavigator();
// import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen
        name="LoginScreen"
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </Home.Navigator>
  );
}
