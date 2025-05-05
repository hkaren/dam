import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { 
    NAVIGATOR_STACK_SCREEN_WELCOME,
    NAVIGATOR_STACK_SCREEN_PRE_LOGIN_FORM,
    NAVIGATOR_STACK_SCREEN_LOGIN_FORM
} from "../utils/AppConstants";

import { LoginForm } from "../pages/login/LoginForm";
import WelcomePage from "../pages/login/WelcomePage";
import { PreLoginForm } from "../pages/login/PreLoginForm";

const Stack = createNativeStackNavigator();

const AuthStackNavigation: React.FC = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={NAVIGATOR_STACK_SCREEN_WELCOME} component={WelcomePage}/>
                <Stack.Screen name={NAVIGATOR_STACK_SCREEN_PRE_LOGIN_FORM} component={PreLoginForm}/>
                <Stack.Screen name={NAVIGATOR_STACK_SCREEN_LOGIN_FORM} component={LoginForm}/>
                {/* <Stack.Screen name={NAVIGATOR_STACK_SCREEN_SIGN_UP} component={RegistrationForm}/>
                <Stack.Screen name={NAVIGATOR_STACK_SCREEN_FORGOT_PASS} component={ForgotPassForm}/>
                <Stack.Screen name={"SendMail"} component={SendMail}/>
                <Stack.Screen name={"ChangePassword"} component={ChangePassword}/> */}
            </Stack.Navigator>
        </>


    );
};

export default AuthStackNavigation;
