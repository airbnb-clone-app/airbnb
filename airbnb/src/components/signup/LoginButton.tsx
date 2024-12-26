import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/Global";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const images: { [key: string]: any } = {
  email: require("../../assets/images/email.png"),
  google: require("../../assets/images/google.png"),
  kakao: require("../../assets/images/kakao.png"),
};

export default function LoginButton({
  text,
  type,
}: {
  text: string;
  type: string;
}) {
  return (
    <Pressable style={styles.container}>
      <Image
        style={[styles.img, type === "email" ? { width: 30 } : null]}
        source={images[type]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}로 로그인하기</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: hp(2),
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: hp(1),
  },
  img: {
    position: "absolute",
    left: 0,
    width: 25,
    height: 25,
    marginLeft: wp(2),
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    fontSize: hp(2),
  },
  text: {
    fontSize: hp(1.7),
    fontWeight: 600,
  },
});
