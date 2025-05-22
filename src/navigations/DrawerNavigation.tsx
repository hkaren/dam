import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/home';
import Settings from '../pages/Settings';
import Logout from '../pages/logout';
import { DrawerParamList } from '../Interface';
import CustomDrawer from '../components/CustomDrawer';
import About from '../pages/about';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.7)',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}; 