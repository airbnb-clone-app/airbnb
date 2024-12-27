import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
export const listStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: "red",
    zIndex: 1,
  },
  background: {
    backgroundColor: "blue",
  },
  listContainer: {
    top: SCREEN_HEIGHT * -0.09,
    paddingHorizontal: 20,
    backgroundColor: "green",
    zIndex: 0,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
  },
  item: {
    alignContent: "center",
  },
  gap: {
    height: SCREEN_HEIGHT * 0.09,
    backgroundColor: "yellow",
  },
});
