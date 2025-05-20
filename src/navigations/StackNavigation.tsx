import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import TabNavigation from "~/navigations/tabNavigation";
//import BottomSheetStackNavigation from "~/navigations/bottomSheetScreens";
//import {BottomHalfModal, CreateFormModal, LoadingSkeleton} from "~/components";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {HeaderProfile} from "../components/headerProfile";
import {DrawerNavigation} from "./DrawerNavigation";

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
            {/*<Stack.Screen name={'AuthStackNavigation'} component={AuthStackNavigation} options={{headerShown: false}}/>*/}


            <Stack.Screen name={'DrawerNavigation'} component={DrawerNavigation}

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
