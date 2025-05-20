import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerNavigationProps } from '../../Interface';
import { SvgComponent } from '../../core/SvgComponent';

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Menu</Text>
        </View>
        
        <View style={styles.drawerContent}>
          <TouchableOpacity 
            style={styles.drawerItem} 
            onPress={() => props.navigation.navigate('Home')}
          >
            <SvgComponent name="home" color="#333" />
            <Text style={styles.drawerItemText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.drawerItem} 
            onPress={() => props.navigation.navigate('Settings')}
          >
            <SvgComponent name="settings" color="#333" />
            <Text style={styles.drawerItemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.drawerItem} 
            onPress={() => props.navigation.navigate('Logout')}
          >
            <SvgComponent name="logout" color="#333" />
            <Text style={styles.drawerItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#2196F3',
    justifyContent: 'flex-end',
    padding: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerContent: {
    padding: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  drawerItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDrawer; 