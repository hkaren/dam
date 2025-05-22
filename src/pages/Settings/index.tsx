import React, {FC} from 'react';

import { MainTabActivityScreenProps} from '../../Interface';

import {
  Header,
} from '../../components';
import {useSelector} from "react-redux";
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import { InputOutlined } from '../../components/core/InputOutlined';

const Settings: FC<MainTabActivityScreenProps> = (props) => {
    const customer = useSelector((store: any) => store.customer);

    return (
      <>
        <Header title="Settings" navigation={props.navigation} />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}} automaticallyAdjustKeyboardInsets>
            {/* Language */}
            <Text style={styles.sectionLabel}>Language</Text>
            <View style={styles.dropdownField}>
              <Text style={styles.dropdownText}>English</Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </View>

            <TextInput
                style={styles.input}
                value={''}
                onChangeText={() => console.log('')}
                autoCapitalize="none"
            />
            <InputOutlined
              label="Other"
              value={''}
              onChange={(value) => {
                 console.log(value);
                 
              }} />
              
            <Text style={styles.inputLabel}>Username</Text>
            <View style={styles.inputField}>
              <Text style={styles.inputText}>karen</Text>
            </View>

            {/* Password */}
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputField}>
              <Text style={[styles.inputText, styles.placeholderText]}>Password</Text>
            </View>

            {/* Organization URL */}
            <Text style={styles.inputLabel}>Organization URL</Text>
            <View style={styles.inputField}>
              <Text style={[styles.inputText, {fontWeight: 'bold'}]}>http://10.27.41.84:8888/dgs3g_web/</Text>
            </View>

            {/* Department */}
            <Text style={styles.sectionLabel}>Department</Text>
            <View style={styles.dropdownField}>
              <Text style={styles.dropdownText}></Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonGroup}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
              <View style={styles.rowButtons}>
                <View style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Scan</Text>
                </View>
                <View style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Browse...</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
};

export default Settings;