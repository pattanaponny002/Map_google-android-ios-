import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 820,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
  TitleHead: {
    fontSize: 30,
    marginBottom: 20,
    height: 50,
  },
  Box_View: {
    width: "90%",
    height: 500,

    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    elevation: 5,
    shadowRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 5,
  },

  Mapview: {
    width: "100%",
    height: "100%",
    padding: 100,
  },
});
