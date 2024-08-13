import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home.js';
import Calendar from '../screens/Calendar/Calendar';
import Chats from '../screens/Chats/Chats';
import Profile from '../screens/Profile/Profile.jsx';


function TabNavigation() {
    const Tab= createBottomTabNavigator(); //importing the createBottomTabNavigator fx

  return (
      <NavigationContainer>
          <Tab.Navigator>
              {/*<Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Calendar" component={Calendar}  />
              <Tab.Screen name="Chats" component={Chats}/>
              <Tab.Screen name="Profile" component={Profile} />*/}
          </Tab.Navigator>
      </NavigationContainer>
  )
}

export default TabNavigation;
