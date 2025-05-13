import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ImagesPath from '../../utils/ImagesPath';

const Logout = () => {
  return (
    <View style={styles.container}>
      {/* Time badge */}
      <View style={styles.timeBadge}>
        <Text style={styles.timeText}>6:12</Text>
      </View>

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
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;