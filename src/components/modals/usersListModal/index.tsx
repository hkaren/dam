import React, {useEffect, useState} from "react";
import {
    View,
    Text
} from "react-native";
import Modal from "react-native-modal";
import { styles } from "./styles";
import { Checkbox } from "../../core/Checkbox";
import { Styles } from "../../../core/Styles";


interface Props {
    visible: boolean,
    onClose: () => void,
    usersList: any[],
    selectedDataList: any[],
    onChangeData: (userID: any) => void
}

export const UsersListModal: React.FC<Props> = ({ 
    visible,
    onClose,
    usersList,
    selectedDataList,
    onChangeData
}) => {

    return (
        <Modal
            testID={"modal"}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            swipeDirection={['down', 'up', 'left', 'right']}
            style={styles.containerModal}
            statusBarTranslucent
        >
            <View style={styles.container}>
                {usersList?.map((user) => (
                    <Checkbox
                        label={`${user?.firstName} ${user.lastName}`}
                        selected={selectedDataList?.some((item_: any) => item_ == user.userID)}
                        onSelect={() => onChangeData(user.userID)}
                        containerStyle={[Styles.mb_5]}
                    />
                ))}
            </View>
        </Modal>
    );
};
