import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/home';
import Settings from '../pages/Settings';
import Logout from '../pages/logout';
import { DrawerParamList } from '../Interface';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}; 