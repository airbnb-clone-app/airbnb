import { StyleSheet, Dimensions } from "react-native";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 9999,
  },
});

export const colors = {
  Rausch: "#FF5A5F",
  Babu: "#00A699",
  Arches: "#FC642D",
  Hof: "#484848",
  Foggy: "#767676",
};
