import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderProfile} from "../components/headerProfile";
import {DrawerNavigation} from "./DrawerNavigation";
import AuthStackNavigation from "./AuthStackNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <>
        <Stack.Navigator screenOptions={{animation: 'none'}}>
            <Stack.Screen name={'AuthStackNavigation'} component={AuthStackNavigation} options={{headerShown: false}}/>
            <Stack.Screen name={'DrawerNavigation'} component={DrawerNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    </>
  );
};
export default StackNavigation;