import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const listStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    // backgroundColor: "red",
  },
  listContainer: {
    flex: 7,
    // backgroundColor: "blue",
    paddingHorizontal: 20,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
  },
  item: {
    alignContent: "center",
  },
});
