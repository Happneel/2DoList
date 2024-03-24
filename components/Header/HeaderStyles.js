// HeaderStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flex: 1,
    marginHorizontal: 10,
  },
  logo: {
    width: "45%",
    height: "45%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    color: "grey",
  },
  newTask: {
    position: "absolute",
    top: 0,
    right: 10,
    marginTop: 10,
    backgroundColor: "#3282F6",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  newTaskText: {
    fontSize: 25,
    color: "white",
  },
  settings: {
    position: "absolute",
    top: 0,
    right: 60,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  settingsText: {
    fontSize: 20,
  },
});
