import React from "react";
import {
    View,
    Text,
} from "react-native";
import Modal from "react-native-modal";
import {styles} from "./styles";
import { SvgComponent } from "../../../core/SvgComponent";

interface FieldInfoModalProps {
    isVisible: boolean;
    showHideInfo: () => void;
    fieldInfo: any
}

export const FieldInfoModal: React.FC<FieldInfoModalProps> = ({
                                                isVisible,
                                                showHideInfo,
                                                fieldInfo
                                            }) => {

    

    return (
        <Modal
            testID={"modal"}
            isVisible={isVisible}
            swipeDirection={['down', 'up']}
            onSwipeComplete={showHideInfo}
            onBackdropPress={showHideInfo}
            style={styles.containerModal}
            statusBarTranslucent>
                <View style={styles.container}>
                    <View style={styles.title_area}>
                        <SvgComponent name="field_title_info" cssClass={[styles.icon]} color="#555555" />
                        <Text style={styles.title}>Info</Text>
                    </View>
                    {fieldInfo}
                </View>
        </Modal>
    );
};


