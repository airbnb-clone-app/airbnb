import { StyleSheet, Dimensions } from "react-native";
import { colors, SCREEN_WIDTH, SCREEN_HEIGHT } from "./Global";

export const itemsStyle = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
    borderRadius: 15,
  },
  addrContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "green",
  },
  addr: {
    fontSize: 17,
    fontWeight: "500",
  },
  bodyContainer: {
    marginLeft: 3,
    marginTop: 12,
    marginBottom: 50,
    flex: 1,
  },
  review: {
    flexDirection: "row",
  },
  star: {
    fontSize: 17,
    fontWeight: "500",
    // backgroundColor: "orange",
  },
  title: {
    fontSize: 16,
    color: colors.Foggy,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 3,
  },
  price2: {
    fontSize: 17,
    color: "black",
    marginLeft: 1,
  },
});
