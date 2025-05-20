import { Text, TouchableOpacity, View } from "react-native"
import { MainTabScreenHeaderProps } from "../../Interface"
import { styles } from "./styles"
import { SvgComponent } from "../../core/SvgComponent"
import { Styles } from "../../core/Styles"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Header = (props: MainTabScreenHeaderProps) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((store: any) => store.userInfo);

    const [showBack, setShowBack] = useState(false);

    const goBackToHome = () => {
        //context.CurrentProfileInfo.accountId = context.UserInfo.accountId;
        //context.CurrentProfileInfo.userName = context.UserInfo.userName;
        props.navigation.goBack();
    };

    const openBottomModal = () => {
        dispatch({
            type: 'SET_CONFIG',
            payload: {bottomHalfModal: true, bottomHalfModalData: {type: 'header'}}
        })
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
                <View style={styles.HeaderAreaInnerRight}>
                    <View style={styles.HeaderAreaInnerRightInner}>
                        <View></View>
                        <View style={styles.flex_d_row}>
                            <TouchableOpacity style={Styles.IconButton}
                                                onPress={openBottomModal}>
                                <SvgComponent name="more"/>
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
