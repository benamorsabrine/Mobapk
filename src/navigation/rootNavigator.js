/* import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AppStack from './AppStack';
import PhoneTicket from '../screens/PhoneTicket';
import FieldTicket from '../screens/FieldTicket';
import CustomDrawer from '../components/CustomDrawer';

export default function RoootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#e95a69',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            fontFamily: 'Poppins-Light',
            fontSize: 15,
          },
        }}>

        <DrawerNavigator.Screen name="Home" component={MainTabNavigator} />
        <DrawerNavigator.Screen name="App" component={AppStack} />
        <DrawerNavigator.Screen name="HomeStack" component={HomeStack} />
      </DrawerNavigator>
    </NavigationContainer>
  );
}
*/
