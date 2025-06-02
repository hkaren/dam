import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import styles from './styles';
import ImagesPath from '../../utils/ImagesPath';
import { MD5 } from "crypto-js";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceId, getPlatform } from '../../utils/StaticMethods';
import { MOBILE_API_PATH_REST, MOBILE_API_PATH_REST_AUTH_LOGIN, MOBILE_API_PATH_REST_MESSAGE_RECEIVERS_LIST, MOBILE_APP_VERSION, MOBILE_DEFAULT_LANG_KEY, NAVIGATOR_STACK_SCREEN_HOME, NAVIGATOR_STACK_SCREEN_WELCOME, RESPONSE_CODE_SUCCESS } from '../../utils/AppConstants';
import axiosInstance from '../../networking/api';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import { InputOutlined } from '../../components/core/InputOutlined';
import { Styles } from '../../core/Styles';
import { Button } from '../../components/Button';
import { UsersListModal } from '../../components/modals/usersListModal';
import { RouteProp } from '@react-navigation/native';

interface MessagesNewProps {
  navigation: any;
}

const getUrl = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("url");
  } catch (error) {
      console.log(error);
      return null;
  }
};

interface MessagesNewProps {
  route: RouteProp<Record<string, any>, string>;
  navigation: any;
}

const MessagesNew = (props: MessagesNewProps) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((store: any) => store.userInfo);
  const config = useSelector((store: any) => store.config);

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [usersModalVisible, setUsersModalVisible] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState<any[]>([]);
  
  useEffect(() => {
    setUsersModalVisible(false);
    setUsersList([]);
    setSelectedUserIds([]);
    console.log(' // props.route.params', props.route.params, ' // props.route.params');
    
  }, [props.route.params]);
  

  const openUsersModal = async () => {
    const url: string | null = await getUrl();

    const data = {
      uniqueKey: userInfo.uniqueKey,
    };
    const response = await axiosInstance.post(url + MOBILE_API_PATH_REST_MESSAGE_RECEIVERS_LIST, data);
    setUsersList(response?.data?.users);
    setUsersModalVisible(true);
    setSelectedUserIds([]);
    //console.log(' // response', response?.data?.users, ' // response');
  };

  const onChangeDataCallback = (userID: any) => {
    //setSelectedUserIds([...selectedUserIds, userID]);

    let insertData = selectedUserIds;
    let arr = insertData;
    let findIndex = arr.findIndex((item: string) => item === userID);
    if(findIndex !== -1){
        insertData.splice(findIndex, 1);
    }else{
        insertData.push(userID);
    }
    setSelectedUserIds({...selectedUserIds, ...insertData});
  };

  return (
    <>
      <Header title="Messages" navigation={props.navigation} />
      <View style={styles.container}>
        

        {/* <View style={styles.sendToBox}>
          <Text style={localstylesStyles.sendToText}>Send to</Text>
        </View> */}
        <ScrollView contentContainerStyle={{flexGrow: 1}} automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false}>
          <View style={Styles.mb_20}>
              <Button 
                variant="general"
                title="Send to ..." 
                buttonCssClass={[{textAlign: 'left', justifyContent: 'flex-start'}]} 
                textCssClass={[Styles.fw_n, Styles.fs_14]}
                onClickHandler={() => openUsersModal()} />
          </View>

          <View style={Styles.mb_10}>
              <InputOutlined
                label={t('subject')}
                value={subject}
                onChange={(value) => {
                  setSubject(value);
                }} />
          </View>

          <View style={Styles.mb_20}>
              <InputOutlined
                  label="Comment *"
                  value={body}
                  multiline
                  fieldCss={[styles.comment]}
                  onChange={(value) => {
                      setBody(value)
                  }} />
          </View>
          <View style={Styles.mb_20}>
              <Button variant="general" title="Send" onClickHandler={() => {}} />
          </View>

          {/* <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabPlus}>+</Text>
          </TouchableOpacity> */}
        </ScrollView>

        {usersModalVisible ?
            <UsersListModal
                onClose={() => {
                    setUsersModalVisible(false)
                }}
                visible={usersModalVisible}
                usersList={usersList}
                selectedDataList={selectedUserIds}
                onChangeData={(userID: any) => {
                  // setSelectedUserIds([...selectedUserIds, userID]);

                  onChangeDataCallback(userID);
                }}
            />
            :
            null
        }
      </View>
    </>
  );
};

export default MessagesNew;