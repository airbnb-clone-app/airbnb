import { StyleSheet, Dimensions } from "react-native";

import { colors, SCREEN_WIDTH, SCREEN_HEIGHT } from "./Global";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const { height: SCREEN_HEIGHT } = Dimensions.get("window");
export const listStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: "white",
    zIndex: 1,

    // borderBottomColor: "rgba(128, 128, 128, 0.3)",
    elevation: 2,
  },
  background: {
    // backgroundColor: "blue",
  },
  listContainer: {
    top: SCREEN_HEIGHT * -0.09,
    paddingHorizontal: 20,
    backgroundColor: "white",
    zIndex: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  item: {
    alignContent: "center",
  },
  gap: {
    height: SCREEN_HEIGHT * 0.09,
    zIndex: 0,
    // backgroundColor: "yellow",
    // borderBottomWidth: 2,
    alignItems: "center",
  },
  bottomLine: {
    borderBottomWidth: 1.2,
    borderBottomColor: colors.Foggy,
    height: SCREEN_HEIGHT * 0.03,
    opacity: 0.3,
  },
  informationContainer: {
    height: SCREEN_HEIGHT * 0.14,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  information: {
    height: SCREEN_HEIGHT * 0.06,
    borderRadius: 15,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(128, 128, 128, 0.3)",
    borderWidth: 1,
  },
});
