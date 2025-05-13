import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const Styles = StyleSheet.create({
    w_100: {
        width: 100
    },
    mb_15: {
        marginBottom: 15
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
});
