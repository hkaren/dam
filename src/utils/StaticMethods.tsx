//import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Toast, { ToastPosition } from 'react-native-toast-message';

export const getDeviceId = async () => {
    //const deviceId = await Device.getDeviceTypeAsync();
    //console.log('Device ID:', deviceId, Device.manufacturer, Device.modelName);
    return 'deviceId';
};

export const getLocation = () => {
    let data = {
        latitude: "",
        longitude: ""
    };

    
    return data;
};

export const getPlatform = () => {
    return Platform.OS === 'android' ? "ANDROID" : "iOS";
};

export const toast = (type: string, position: ToastPosition, text1: string, text2: string) => {
    Toast.show({
        type: type,
        position: position,
        text1: text1,
        text2: text2,
        visibilityTime: 3000,
        autoHide: true,
        onShow: () => {},
        onHide: () => {}
    });
};