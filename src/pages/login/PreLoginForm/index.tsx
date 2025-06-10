import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NAVIGATOR_STACK_SCREEN_LOGIN_FORM} from '../../../utils/AppConstants';
import styles from './styles';
import {CameraView, CameraType, useCameraPermissions} from 'expo-camera';

type RootStackParamList = {
  LoginForm: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const PreLoginForm = () => {
  const navigation = useNavigation<NavigationProp>();
  const [facing, setFacing] = useState<CameraType>('back');
  const [showCamer, setShowCamer] = useState<boolean>(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View/>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission"/>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={{flex: 1}}>

      {showCamer ?
        <View style={{ flex: 1,
          justifyContent: 'center',}}>
          <CameraView style={styles.camera} facing={facing}
                      barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                      }}
                      onBarcodeScanned={(e) => {
                        console.log(e);
                      }}>

          </CameraView>
        </View>
        :
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenue</Text>

          <Text style={styles.subtitle}>
            Scannez le QR Code fourni par votre Organisation.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setShowCamer(true)}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Naviguer...</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(NAVIGATOR_STACK_SCREEN_LOGIN_FORM)}
            >
              <Text style={styles.buttonText}>Config. manuel</Text>
            </TouchableOpacity>
          </View>
        </View>

      }
    </View>
  );
};

