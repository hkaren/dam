import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ImagesPath from '../../utils/ImagesPath';
import { MD5 } from "crypto-js";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceId, getPlatform } from '../../utils/StaticMethods';
import { MOBILE_API_PATH_REST, MOBILE_API_PATH_REST_AUTH_LOGIN, MOBILE_APP_VERSION, NAVIGATOR_STACK_SCREEN_HOME, NAVIGATOR_STACK_SCREEN_WELCOME, RESPONSE_CODE_SUCCESS } from '../../utils/AppConstants';
import axiosInstance from '../../networking/api';

const getEmail = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("email");
  } catch (error) {
      console.log(error);
      return null;
  }
};
const getPassword = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("password");
  } catch (error) {
      console.log(error);
      return null;
  }
};
const getUrl = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("url");
  } catch (error) {
      console.log(error);
      return null;
  }
};

interface LogoutProps {
  navigation: any;
}

const Logout = ({navigation}: LogoutProps) => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.warn('Permission to access location was denied');
          return;
        }
        
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
    })();
}, []);

  const handleAuth = async () => {
    try {
        const email: string | null = await getEmail();
        const password: string | null = await getPassword();
        const url: string | null = await getUrl();
        console.log(email, password, url, ' // email, password, url');
        
        if (email && password && url) {
            const dataToSend = {
                pnToken: "",
                callerName: getPlatform(),
                callerVersion: MOBILE_APP_VERSION,
                depId: "",
                lang: "",
                login: email,
                password: MD5(password).toString(),
                location: {
                    imei: await getDeviceId(),
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                }
            };
            console.log(MOBILE_API_PATH_REST + MOBILE_API_PATH_REST_AUTH_LOGIN);
            
            console.log(dataToSend, ' // dataToSend');
            const response = await axiosInstance.post(url + MOBILE_API_PATH_REST_AUTH_LOGIN, dataToSend);
            const result = response?.data?.result;
            console.log(response?.data, ' // result');
            
            if(result?.code == RESPONSE_CODE_SUCCESS){
                // await setDataToStorage(data.login, data.password, url_);
                // dispatch({
                //     type: 'SET_CUSTOMER',
                //     payload:{
                //         isLogin: true,
                //         account: response?.data?.userInfo,
                //         departments: response?.data?.departments,
                //         permissions: response?.data?.permissions,
                //         uniqueDBKey: response?.data?.uniqueDBKey,
                //         uniqueKey: response?.data?.uniqueKey,
                //         userDefaultHomePage: response?.data?.userDefaultHomePage,
                //     }
                // })
                navigation.navigate(NAVIGATOR_STACK_SCREEN_HOME);
            } else {
                navigation.replace(NAVIGATOR_STACK_SCREEN_WELCOME);
            }
        } else {
            navigation.replace(NAVIGATOR_STACK_SCREEN_WELCOME);
        }
    } catch (e) {
        navigation.replace(NAVIGATOR_STACK_SCREEN_WELCOME);
    }
};

  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <Image
        source={ImagesPath.logoV2} // Replace with your actual logo path
        style={styles.logo}
      />

      {/* damaris mobile text */}
      <Text style={styles.appName}>
        <Text style={styles.appNameMain}>damaris</Text>
        <Text style={styles.appNameSub}>mobile</Text>
      </Text>

      {/* My account box */}
      <View style={styles.accountBox}>
        <Text style={styles.accountTitle}>My account</Text>
        <Text style={styles.accountField}>
          URL:
          <Text style={styles.accountValue}>http://10.27.41.84:8888/dgs3g_web</Text>
        </Text>
        <Text style={[styles.accountField, styles.accountFieldMargin]}>
          Login:
          <Text style={styles.accountValue}>karen</Text>
        </Text>
        <Text style={[styles.accountField, styles.accountFieldMargin]}>
          Username:
          <Text style={styles.accountValue}>Karen Hakobyan</Text>
        </Text>
      </View>

      {/* Vendor ID */}
      <Text style={styles.vendorLabel}>Vendor ID</Text>
      <Text style={styles.vendorValue}>
        5CE0307A-C968-4991-A819-DC5919857DDF
      </Text>

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => handleAuth()}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;