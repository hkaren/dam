import {useState} from "react";
import {TextInput} from "react-native-paper";
import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import { SvgComponent } from "../../core/SvgComponent";
import { FieldInfoModal } from "../modals/fieldInfoModal";
import { InputOutlinedProps } from "../../Interface";

export const InputOutlined = function (props: InputOutlinedProps) {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState<string>('');
    const[visibleInfo, setVisibleInfo] = useState<boolean>(false);

    const showHideInfo = () => {
        setVisibleInfo(previousState => !previousState);
    };

    return (
        <View style={[styles.container]}>
            <TextInput
                label={
                    !props.multiline || focus ?
                        <View style={[{paddingLeft: 2, marginTop: -5}]}>
                            <Text style={[props.placeholderStyle, focus || value || props.value ? {
                                backgroundColor: 'white',
                                paddingLeft: 0,
                                paddingRight: 7,
                                fontSize: 16,
                                color: 'black'
                            } : null]}>{props.label}</Text>
                        </View>
                        :
                        ''
                }
                value={props.value}
                placeholder={props.multiline ?  focus ? '' : props.label : ''}
                placeholderTextColor={focus ? 'transparent' : undefined}
                mode="outlined"
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
                onChangeText={(e) => {
                    setValue(e)
                    props.onChange(e)
                }}
                outlineStyle={[styles.outlined, props.outlineStyleCustom, props.outlineStyle as StyleProp<ViewStyle>]}
                textColor={'black'}
                activeOutlineColor={'black'}
                style={[styles.field, props.fieldCss as StyleProp<ViewStyle>]}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
                editable={props.editable == -1 ? false : true}
                onTouchEnd={props.onClickCallback}/>

                { props.fieldInfo ?
                    <TouchableOpacity style={styles.info_area} onPress={() => showHideInfo()}>
                        <SvgComponent name='field_title_info' />
                    </TouchableOpacity>
                    : null
                }

            <FieldInfoModal
                isVisible={visibleInfo}
                showHideInfo={showHideInfo}
                fieldInfo={props.fieldInfo}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    },
    field: {
        height: 47,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    outlined: {
        borderColor: '#d9d9d9',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderRadius: 15
    },

    labelContainer: {
        backgroundColor: "white", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    info_area: {
        width: 40,
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        right: 2,
        top: 8,
        borderRadius: 5,
        alignItems: 'center'
    },
});
