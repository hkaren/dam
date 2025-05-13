import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    HeaderArea: {
        /* flex: 1, */
        height: 45,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    HeaderAreaInner: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    HeaderAreaInnerLeft: {
        marginRight: 'auto'
    },
    HeaderAreaInnerRight: {
        marginLeft: 'auto'
    },
    HeaderAreaInnerLeftInner: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        height: '100%'
    },
    HeaderAreaInnerRightInner: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        height: '100%'
    },
    flex_d_row: {
        flexDirection: 'row'
    },
    HamburgerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginLeft: 15
    }
});
