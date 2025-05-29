import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import styles from './styles';
import ImagesPath from '../../utils/ImagesPath';
import { MD5 } from "crypto-js";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceId, getPlatform } from '../../utils/StaticMethods';
import { MOBILE_API_PATH_REST, MOBILE_API_PATH_REST_AUTH_LOGIN, MOBILE_API_PATH_REST_GET_MESSAGES, MOBILE_APP_VERSION, MOBILE_DEFAULT_LANG_KEY, NAVIGATOR_STACK_SCREEN_HOME, NAVIGATOR_STACK_SCREEN_WELCOME, PAGINATION_COUNT_20, RESPONSE_CODE_SUCCESS } from '../../utils/AppConstants';
import axiosInstance from '../../networking/api';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import { Loading } from '../../components/loading/Loading';
import { NoDataFoundPage } from '../../components/core/NoDataFoundPage';
import { RouteProp, useRoute } from '@react-navigation/native';

const getUrl = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("url");
  } catch (error) {
      console.log(error);
      return null;
  }
};
const getLang = async (): Promise<string | null> => {
  try {
      return await AsyncStorage.getItem("lang");
  } catch (error) {
      console.log(error);
      return null;  
  }
};

interface MessagesProps {
  route: RouteProp<Record<string, any>, string>;
  navigation: any;
}

const Messages = (props: MessagesProps) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((store: any) => store.userInfo);
  const config = useSelector((store: any) => store.config);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [messagesListData, setMessagesListData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [endScrollFlag, setEndScrollFlag] = useState<boolean>(true);
  const [scrollCounter, setScrollCounter] = useState<number>(0);
  const [noDataFoundPage, setNoDataFoundPage] = useState(false);
  const [allowServerCall, setAllowServerCall] = useState<boolean>(true);
  const [loadingTryAgain, setLoadingTryAgain] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setEndScrollFlag(false);
    setNoDataFoundPage(false);
    setAllowServerCall(true);
    setLoadingTryAgain(false);
    setMessagesListData([]);
    setScrollCounter(0);
    initMessages(0, true);
  }, [props.route.params]);

  const reInitPages = () => {
      setRefreshing(true)
      setScrollCounter(0);
      setAllowServerCall(true);
      setLoadingTryAgain(true);
      initMessages(0, true);
  };

  const nextPagePages = () => {
    if(endScrollFlag && allowServerCall){
      initMessages(scrollCounter, false);
    }
  };

  const initMessages = async (scrollCounter: number, refresh: boolean) => {
    if (allowServerCall) {
      setAllowServerCall(false);
      const url: string | null = await getUrl();
      const lang: string | null = await getLang();
      try {
          const data = {
            uniqueKey: userInfo.uniqueKey,
            lang: lang,
            allMessages: false,
            pagination: {
              pageNumber: scrollCounter,
              pageSize: PAGINATION_COUNT_20
            }
          };
          console.log(url + MOBILE_API_PATH_REST_GET_MESSAGES, ' /// url + MOBILE_API_PATH_REST_GET_MESSAGES');
          
          const response = await axiosInstance.post(url + MOBILE_API_PATH_REST_GET_MESSAGES, data);
          const responsePages = response.data;
          //console.log(' /// responsePages', responsePages, ' /// responsePages');
          

          if (responsePages) {
              if (scrollCounter == 0) {
                  setNoDataFoundPage(false);
                  setMessagesListData(responsePages);
              } else {
                  setNoDataFoundPage(false);
                  setMessagesListData([...messagesListData, ...responsePages]);
              }

              if (responsePages.length == 0) {
                  setNoDataFoundPage(true);
              }
          } else {
              setNoDataFoundPage(true);
          }

          setScrollCounter(scrollCounter+1);
          setLoadingTryAgain(false);
          setAllowServerCall(true);
          setRefreshing(false)

          if(responsePages?.length == PAGINATION_COUNT_20){
              setEndScrollFlag(true);
          } else {
              setEndScrollFlag(false);
          }

          setTimeout(() => {
              setLoading(false);
          }, 500);
      } catch (e) {
          console.log(e);
          setLoading(false);
          setLoadingTryAgain(false);
          setEndScrollFlag(false);
          setAllowServerCall(true);
          setRefreshing(false)
          setNoDataFoundPage(true);
      }
    }
  };

  const messages = [
    {
      id: '1',
      title: 'Company: zzs',
      subtitle: 'Company "zzs" has been deleted.\n\nDone...',
    },
    {
      id: '2',
      title: 'Company: zzqq111111',
      subtitle: 'Company "zzqq111111" has ...',
    },
  ];

  const _renderPage = ({item, index}: { item: any, index: number }) => {
    return (
      <View>
        <View style={styles.messageContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.divider} />
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Header title={t('fragment_about_us_title')} navigation={props.navigation} />
      {/* <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
      /> */}

      {messages?.length > 0 &&
          <FlatList refreshControl={<RefreshControl colors={["#9Bd35A", "#689F38"]} refreshing={refreshing}
                                      onRefresh={() => {
                                          reInitPages();
                                      }}/>}
                  data={messagesListData}
                  renderItem={_renderPage}
                  keyExtractor={(item) => item?.pageId}
                  showsVerticalScrollIndicator={false}
                  onEndReachedThreshold={0.2}
                  onEndReached={() => nextPagePages()}
                  ListFooterComponent={endScrollFlag ? <View><ActivityIndicator
                  style={{paddingBottom: 15, backgroundColor: 'white'}}
                  size={'large'}
                  color={'#000000'}
                  /></View> : null}
              />
      }
      { noDataFoundPage ?
          <NoDataFoundPage reInitHandler={() => reInitPages()} state={loadingTryAgain} />
          : null
      }
      <Loading visible={loading} transparent={false}/>
    </View>
  );
};

export default Messages;