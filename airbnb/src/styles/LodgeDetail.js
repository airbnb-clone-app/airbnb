import { StyleSheet, Dimensions } from "react-native";
import { colors, SCREEN_WIDTH, SCREEN_HEIGHT } from "./Global";

export const detailStyle = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 20,
    borderBottomColor: "rgba(128, 128, 128, 0.3)",
    borderBottomWidth: 1.2,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 20,
    color: "#222222",
  },
  addr: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222222",
  },
  reviewCnt: {
    flexDirection: "row",
    // backgroundColor: "blue",
    marginTop: 5,
  },
  reviewText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",

    // backgroundColor: "red",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
});
