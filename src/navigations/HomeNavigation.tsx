import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
    NAVIGATOR_STACK_SCREEN_MESSAGES,
    NAVIGATOR_STACK_SCREEN_HOME,
    NAVIGATOR_STACK_SCREEN_SETTINGS,
    NAVIGATOR_STACK_SCREEN_LOGOUT,
} from '../utils/AppConstants';
import { Home } from "../pages/home";
import { Settings } from "../pages/Settings";
import AuthStackNavigation from "./AuthStackNavigation";
import Logout from "../pages/logout";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

const HomeNavigation: React.FC = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={'HomeStack'} component={HomeStack}/>
            {/* <Stack.Screen name={NAVIGATOR_STACK_SCREEN_SETTINGS} component={Settings}/>
            <Stack.Screen name={NAVIGATOR_STACK_SCREEN_LOGOUT} component={Logout}/> */}
            {/* <Stack.Screen name={NAVIGATOR_STACK_SCREEN_LOGOUT} component={Logout}/> */}
        </Stack.Navigator>
    );
};

export default HomeNavigation;
