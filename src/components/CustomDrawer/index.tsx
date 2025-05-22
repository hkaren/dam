import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerNavigationProps, MenuItem } from '../../Interface';
import { SvgComponent } from '../../core/SvgComponent';
import { Styles } from '../../core/Styles';
import { NAVIGATOR_STACK_SCREEN_LOGOUT } from '../../utils/AppConstants';
import ImagesPath from '../../utils/ImagesPath';
import { useDispatch, useSelector } from 'react-redux';

const CustomDrawer = (props: any) => {
  const config = useSelector((store: any) => store.config);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<string | null>('1');

  const selectLeftMenu = (menuItem: MenuItem) => {
    setSelectedId(menuItem.id);
      dispatch({type: 'SET_CONFIG', payload: {profileDrawerActiveId: menuItem.id, profileDrawerActiveTitle: menuItem.title}})
    // onChangeSelectTab(menuItem.id)
    // onClose()
    // @ts-ignore
    props.navigation.navigate(menuItem.navigateTo);
  };

  const menuArray: MenuItem[] = [
    {id: '1', navigateTo: 'ProfileAboutHome', title: 'Messages', icon: ImagesPath.messageDrawer},
    {id: '2', navigateTo: 'ProfileCourse', title: 'Physical archive', icon: ImagesPath.phArchiveDrawer},
    {id: '3', navigateTo: 'ProfileLesson', title: 'Electronic archive', icon: ImagesPath.elArchiveDrawer},
    {id: '4', navigateTo: 'ProfileBook', title: 'Search document', icon: ImagesPath.searchDrawer},
    {id: '5', navigateTo: 'ProfileProject', title: 'Manual task', icon: ImagesPath.manualTaskDrawer},
    {id: '6', navigateTo: 'ProfileTest', title: 'Offline actions', icon: ImagesPath.offlineActionDrawer},
    {id: '7', navigateTo: 'ProfileJob', title: 'Generate token', icon: ImagesPath.generateTokenDrawer},
  ];

  const renderItem = ({item}: { item: MenuItem }) => {
    const backgroundColor = item.id === config.profileDrawerActive ? '#ffffff' : '#ffffff';
    const borderLeftColor = item.id === config.profileDrawerActive ? '#ffffff' : '#ffffff';
    return (
        <TouchableOpacity onPress={() => selectLeftMenu(item)}
                          style={[styles.drawer_item, {backgroundColor, borderLeftColor, borderLeftWidth: 2}]}>
            <Image
                source={item.icon}
                style={styles.drawer_icon}
                resizeMode="contain"
            />
            <Text style={styles.drawer_text}>{item.title}</Text>
        </TouchableOpacity>
    );
  };

  return (
    // <DrawerContentScrollView {...props}> 
      <View style={styles.container}>
        <View style={[Styles.pd_15]}>
              <View style={[Styles.mt_70, Styles.mb_30]}>
                  <Text style={styles.owner_name}>Karen Hakobyan</Text>
                  <Text style={styles.owner_department}>Department</Text>
                  <Text style={styles.owner_mode}>Online mode</Text>
              </View>
              <FlatList
                  data={menuArray}
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
              />
          </View>
          <View style={styles.devider}></View>
          <View>
              <TouchableOpacity style={[styles.drawer_item]} onPress={() => selectLeftMenu({
                  id: '100',
                  navigateTo: 'Settings',
                  title: 'Settings'
              })} >
                  <Text style={[styles.drawer_text, Styles.ml_70]}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.drawer_item]} onPress={() => selectLeftMenu({
                  id: '101',
                  navigateTo: 'About',
                  title: 'About'
              })}>
                  <Text style={[styles.drawer_text, Styles.ml_70]}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.drawer_item]} onPress={() => selectLeftMenu({
                  id: '102',
                  navigateTo: NAVIGATOR_STACK_SCREEN_LOGOUT,
                  title: 'Logout'
              })}>
                  <Text style={[styles.drawer_text, Styles.ml_70]}>Logout</Text>
              </TouchableOpacity>
          </View>
        {/* <View style={styles.header}>
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
        </View> */}
      </View>
    // </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header: {
  //   height: 150,
  //   backgroundColor: '#2196F3',
  //   justifyContent: 'flex-end',
  //   padding: 20,
  // },
  // headerTitle: {
  //   color: '#fff',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  // drawerContent: {
  //   padding: 20,
  // },
  // drawerItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: 15,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#eee',
  // },
  // drawerItemText: {
  //   marginLeft: 15,
  //   fontSize: 16,
  //   color: '#333',
  // },

  drawer_item: {
    height: 44,
    alignItems: 'center',
    flexDirection: 'row'
  },
  drawer_icon: {
      width: 24,
      height: 24,
      resizeMode: "contain",
  },
  drawer_text: {
      marginLeft: 30,
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
  },
  w_100: {
      width: 100
  },
  owner_name: {
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
  },
  owner_department: {
      fontSize: 14,
      fontWeight: '400',
      color: 'black',
      marginTop: 5,
      marginBottom: 5,
  },
  owner_mode: {
      fontSize: 14,
      fontWeight: '400',
      color: '#00FF00',
  },
  devider: {
      height: 1,
      backgroundColor: '#bbbbbb',
      marginVertical: 10,
  }
});

export default CustomDrawer; 