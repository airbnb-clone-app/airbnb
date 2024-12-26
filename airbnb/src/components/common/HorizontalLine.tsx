import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/Global";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function HorizontalLine({ text }: { text: string }) {
  if (text === "") {
    return <View style={styles.oneLine}></View>;
  }
  return (
    <View style={styles.horizontalLineWithText}>
      <View style={styles.line} />
      <Text style={styles.lineText}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalLineWithText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(2),
  },
  oneLine: {
    marginVertical:hp(1),
    width: wp(100),
    height: 1,
    backgroundColor: colors.LightGray,
  },
  line: {
    marginHorizontal: wp(5),
    flex: 1,
    height: 1,
    backgroundColor: colors.LightGray,
  },
  lineText: {
    marginHorizontal: wp(2),
    color: colors.Foggy,
    fontWeight: 700,
  },
});
