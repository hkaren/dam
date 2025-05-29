import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderProfile} from "../components/headerProfile";
import {DrawerNavigation} from "./DrawerNavigation";
import AuthStackNavigation from "./AuthStackNavigation";
import { NAVIGATOR_STACK_SCREEN_DRAWER } from "../utils/AppConstants";

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <>
        <Stack.Navigator
            screenOptions={{animation: 'none'}}
        >
            <Stack.Screen name={'AuthStackNavigation'} component={AuthStackNavigation} options={{headerShown: false}}/>


            <Stack.Screen name={NAVIGATOR_STACK_SCREEN_DRAWER} component={DrawerNavigation}

                        options={{
                            //headerShown: false
                            header: (navigation) => <HeaderProfile />
                        }}
            />
            {/* <Stack.Screen name={'BottomSheetStackNavigation'} component={BottomSheetStackNavigation}
                        options={{headerShown: false}}/> */}


            {/* <Stack.Screen name={NAVIGATOR_STACK_SCREEN_SETTINGS} component={Settings} options={{
                            headerShown: false
                        }}/>
            <Stack.Screen name={NAVIGATOR_STACK_SCREEN_LOGOUT} component={Logout} options={{
                            headerShown: false
                        }}/> */}
        </Stack.Navigator>
    </>
  );
};
export default StackNavigation;