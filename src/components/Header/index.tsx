import { Text, TouchableOpacity, View } from "react-native"
import { MainTabScreenHeaderProps } from "../../Interface"
import { styles } from "./styles"
import { SvgComponent } from "../../core/SvgComponent"
import { Styles } from "../../core/Styles"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Header = (props: MainTabScreenHeaderProps) => {
    const dispatch = useDispatch();
    const config = useSelector((store: any) => store.config);
    const userInfo = useSelector((store: any) => store.userInfo);

    const [showBack, setShowBack] = useState(false);

    const goBackToHome = () => {
        //context.CurrentProfileInfo.accountId = context.UserInfo.accountId;
        //context.CurrentProfileInfo.userName = context.UserInfo.userName;
        props.navigation.goBack();
    };

    const openBottomModal = () => {
        let types = [
            {key: 'all_messages', title: 'All messages'},
            {key: 'new_message', title: 'New message'},
            {key: 'storage_info', title: 'Storage info'},
        ];

        dispatch({
            type: 'SET_CONFIG',
            payload: { bottomHalfModal: true, bottomHalfModalData: {type: types, callbackFunction: openBottomModalCallback, callbackFunctionParams: null} }
        });
    };

    const openBottomModalCallback = async (action: string, item: any) => {
        if (action == 'all_messages') { 
            allMessages();
        } else if (action == 'new_message') {
            newMessage();
        } else if (action == 'storage_info') {
            storageInfo();
        }
    };

    const allMessages = () => {
        props.navigation.navigate('Messages', { randomKey: Math.random(), actionType: 'all-messages' });
    };

    const newMessage = () => {
        props.navigation.navigate('MessagesNew', {randomKey: Math.random()});
    };

    const storageInfo = () => {
        console.log('storageInfo');
    };

    const openDrawer = () => {
        props.navigation.openDrawer();
    };

    const openMessenger = () => {
        //props.navigation.navigate(NAVIGATOR_STACK_SCREEN_MESSENGER);
    };

    return (
        <View style={styles.HeaderArea}>
            <View style={styles.HeaderAreaInner}>
                <View style={styles.HeaderAreaInnerLeft}>
                    <View style={styles.HeaderAreaInnerLeftInner}>
                        <TouchableOpacity style={styles.HamburgerIcon} onPress={openDrawer}>
                            <SvgComponent name='hamburger'/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.HeaderAreaInnerCenter}>
                    <Text style={styles.HeaderAreaInnerCenterText}>{config.profileDrawerActiveTitle}</Text>
                </View>
                <View style={styles.HeaderAreaInnerRight}>
                    <View style={styles.HeaderAreaInnerRightInner}>
                        <View></View>
                        <View style={styles.flex_d_row}>
                            <TouchableOpacity style={Styles.IconButton}
                                                onPress={openBottomModal}>
                                <SvgComponent name="more_vertical"/>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={Styles.IconButton} onPress={() => openMessenger()}>
                                <SvgComponent name="message"/>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
