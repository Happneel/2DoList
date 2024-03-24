// TaskStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    taskButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 25,
        marginVertical: 5,
        marginHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    taskTitle: {
        fontSize: 18,
    },
    checkIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
});
