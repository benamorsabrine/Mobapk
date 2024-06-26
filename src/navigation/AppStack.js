// Import necessary modules
/* import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfilScreen';
import ReclamationScreen from '../screens/NotificationScreen';
import Colors from '../constants/Colors';
import EquipementScreen from '../screens/EquipementScreen';
import FieldTicketScreen from '../screens/FieldTicket';
import TicketScreen from '../screens/TicketScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import PhoneTicket from '../screens/PhoneTicket';
import HomeStack from '../navigation/TabNavigator';
import FicheInter from '../screens/FicheScreen';
// Create navigators
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Define your TabNavigator

// Define your DrawerNavigator
const AppStack = () => {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
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
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reclamation"
        component={ReclamationScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="alert-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={TicketScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="document-text-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Equipements"
        component={EquipementScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="ios-settings" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fiche Interventions"
        component={FicheInter}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({color}) => (
            <Ionicons name="document-text-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack; */
