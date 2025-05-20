import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigation from "./AuthStackNavigation";
//import TabNavigation from "~/navigations/tabNavigation";
//import BottomSheetStackNavigation from "~/navigations/bottomSheetScreens";
//import {BottomHalfModal, CreateFormModal, LoadingSkeleton} from "~/components";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import HomeStack from "./HomeNavigation";
import HomeNavigation from "./HomeNavigation";
import { HeaderProfile } from "../components/headerProfile";
import { NAVIGATOR_STACK_SCREEN_LOGOUT, NAVIGATOR_STACK_SCREEN_SETTINGS } from "../utils/AppConstants";
import Logout from "../pages/logout";
import { Settings } from "../pages/Settings";

const Stack = createNativeStackNavigator();


const StackNavigation: React.FC = () => {
  const navigation: any = useNavigation();

  const config = useSelector((store: any) => store.config);
  const dispatch = useDispatch();

  return (
    <>
        <Stack.Navigator
            screenOptions={{animation: 'none'}}
        >
            <Stack.Screen name={'AuthStackNavigation'} component={AuthStackNavigation} options={{headerShown: false}}/>
            <Stack.Screen name={'HomeNavigation'} component={HomeNavigation} 
                
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
        {/* <BottomHalfModal
            isVisible={config.bottomHalfModal}
            navigation={navigation}
            onClose={() => {
            dispatch({
                type: 'SET_CONFIG',
                payload: {bottomHalfModal: false, scrollDownUp: 'up'}
            })
            }}
        />
        <CreateFormModal
            isVisible={config.createFormModal}
            data={config.createFormModalData}
            onClose={() => {
            dispatch({
                type: 'SET_CONFIG',
                payload: {createFormModal: false}
            })
            }}
        />

        {config.loadingSkeletonFlag ?
            <LoadingSkeleton/>
            :
            null
        } */}
    </>

  );
};

export default StackNavigation;
