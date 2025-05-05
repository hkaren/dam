import React, {FC} from 'react';

import { MainTabActivityScreenProps} from '../../Interface';

import {
  Header,
} from '../../components';
import {useSelector} from "react-redux";
import { Text, View } from 'react-native';

export const Settings: FC<MainTabActivityScreenProps> = (props) => {
    const customer = useSelector((store: any) => store.customer);

    return (
      <>
        <Header navigation={props.navigation} showHumburgerIcon={true}/>
        {/* <PostsList route={props.route} navigation={props.navigation} accountId={customer.accountId}/> */}
        <View>
            <Text>Settings</Text>
        </View>

      </>
    );
};
