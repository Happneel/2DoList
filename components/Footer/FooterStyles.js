// FooterStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    filter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    filterBar: {
        position: "absolute",
        bottom: 3,
        width: "25%",
        height: 3,
        backgroundColor: "#000",
        borderRadius: 50,
        transition: "left 1s",
    },
});
