import { StyleSheet, Dimensions } from "react-native";
import { colors, SCREEN_WIDTH, SCREEN_HEIGHT } from "./Global";

export const itemsStyle = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
    borderRadius: 15,
  },
  addrContainer: {
    flexDirection: "row",
    width: "99.9%",
    backgroundColor: "red",
    justifyContent: "space-between",
  },
  addr: {
    fontSize: 17,
    fontWeight: "500",
  },
  bodyContainer: {
    marginLeft: 3,
    marginTop: 12,
  },
  review: {
    width: "99.9%",
    flexDirection: "row",
    // backgroundColor: "blue",
  },
});
