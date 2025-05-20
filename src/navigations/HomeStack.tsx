import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NAVIGATOR_STACK_SCREEN_HOME, NAVIGATOR_STACK_SCREEN_LOGOUT, NAVIGATOR_STACK_SCREEN_SETTINGS } from "../utils/AppConstants";
import { Home } from "../pages/home";
import { Settings } from "../pages/Settings";
import Logout from "../pages/logout";




const Stack = createNativeStackNavigator();

const HomeStack: React.FC = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >   
            <Stack.Screen name={NAVIGATOR_STACK_SCREEN_HOME} component={Home}/>
            <Stack.Screen name={NAVIGATOR_STACK_SCREEN_LOGOUT} component={Logout}/>
        </Stack.Navigator>
    );
};

export default HomeStack;
