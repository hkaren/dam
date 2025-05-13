import React, {FC} from 'react';

import { MainTabActivityScreenProps} from '../../Interface';

import {
  Header,
} from '../../components';
import {useSelector} from "react-redux";
import { Text, View } from 'react-native';

export const Home: FC<MainTabActivityScreenProps> = (props) => {
    const customer = useSelector((store: any) => store.customer);

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Header navigation={props.navigation} showHumburgerIcon={true}/> */}
        {/* <PostsList route={props.route} navigation={props.navigation} accountId={customer.accountId}/> */}
        
        <View>
          <Text>Home</Text>
        </View>

      </View>
    );
};
