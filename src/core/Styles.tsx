import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const Styles = StyleSheet.create({
    none: {},
    w_100: {
        width: 100
    },
    mb_10: {
        marginBottom: 10
    },
    mb_15: {
        marginBottom: 15
    },
    mb_20: {
        marginBottom: 20
    },
    mb_30: {
        marginBottom: 30
    },
    mt_70: {
        marginTop: 70
    },
    ml_10: {
        marginLeft: 10
    },
    ml_70: {
        marginLeft: 70
    },
    pd_15: {
        padding: 15
    },
    pd_20: {
        padding: 20
    },
    fw_b: {
        fontWeight: 'bold'
    },
    fs_14: {
        fontSize: 14
    },
    fs_16: {
        fontSize: 16
    },
    fs_18: {
        fontSize: 18
    },
    fs_20: {
        fontSize: 20
    },
    color_d9: {
        color: '#d9d9d9'
    },
    IconButton: {
       // width: 100,
        height: 44,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pages_header_title: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    devider: {
        width: '100%',
        height: 1,
        backgroundColor: '#d9d9d9',
        marginVertical: 20
    } ,
    button: {
        backgroundColor: '#E8F4F6',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500',
    },
    buttonColorBlue: {
        backgroundColor: '#3498db',
    },
    buttonColorBlueActive: {
        backgroundColor: '#2d83bd',
    },
});
