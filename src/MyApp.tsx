import React, {useCallback, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Constants from "expo-constants";
import {useDispatch, useSelector} from "react-redux";
import {StatusBar} from 'expo-status-bar';

import MainNavigator from "./navigations/MainNavigator";

import {Provider as PaperProvider} from "react-native-paper";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const APPBAR_HEIGHT = Constants.statusBarHeight;

const MyApp = () => {
//   configureReanimatedLogger({
//     level: ReanimatedLogLevel.warn,
//     strict: true, // Reanimated runs in strict mode by default
//   });
    const [isLogged, setIsLogged] = useState(false);
    const dispatch = useDispatch();
    const config = useSelector((store: any) => store.config)
//     useEffect(() => {
//         setIsLogged(config.isLogin)

//     }, [config]);

    return (
        <GestureHandlerRootView>
         {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
                <PaperProvider>
                    <SafeAreaView edges={['top', 'left', 'right']}
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            //paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,

                        }}
                    >
                            <StatusBar style={'dark'}/>
                            <MainNavigator/>
                    </SafeAreaView>
                </PaperProvider>
         {/* </TouchableWithoutFeedback> */}
         </GestureHandlerRootView>
    );
};

export default MyApp;
