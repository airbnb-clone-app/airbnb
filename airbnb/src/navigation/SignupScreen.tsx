import { useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../styles/Global";
import HorizontalLine from "../components/common/HorizontalLine";
import LoginButton from "../components/signup/LoginButton";
import ArrowIcon from "react-native-vector-icons/AntDesign";
//로그인 버튼 배열
const loginAsset = [
  { key: "email", name: "이메일" },
  { key: "google", name: "구글" },
  { key: "kakao", name: "카카오" },
];
export default function SignupScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((idx: number) => {
    console.log("handleSheetChanges", idx);
  }, []);
  //x버튼 누르면 모달창 닫기
  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  /*마우스 클릭*/
  //국가/지역
  const [nationMouse, setNationMouse] = useState(false);
  //전화번호
  const [phoneNumber, setPhoneNumber] = useState(false);
  const handleNationInput = () => {
    setNationMouse(true);
    setPhoneNumber(false);
  };
  const handlePhoneNumberInput = () => {
    setNationMouse(false);
    setPhoneNumber(true);
  };

  return (
    <GestureHandlerRootView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[hp(95)]}
        style={{ flex: 1, shadowOpacity: 0.3 }}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <View style={styles.topContainer}>
            <Pressable style={styles.closeButton} onPress={closeBottomSheet}>
              <Text style={{ fontSize: 30 }}>&times;</Text>
            </Pressable>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.topText}>로그인 또는 회원가입</Text>
            </View>
          </View>
          <HorizontalLine text="" />

          {/* 상단 내용 */}
          <View style={styles.middleContainer}>
            {/* 국가/지역 선택 인풋상자 */}
            <View>
              <Pressable
                style={[
                  styles.input,
                  {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    flexDirection: "row", // 가로 방향으로 배치
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  nationMouse && {
                    borderWidth: 2,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                ]}
                onPress={handleNationInput}
              >
                <Text style={{ color: colors.Foggy }}>국가/지역</Text>
                <ArrowIcon name="down" size={15} />
              </Pressable>
              {/* 전화번호 선택 인풋상자 */}
              <TextInput
                keyboardType="phone-pad"
                placeholder="전화번호"
                placeholderTextColor={colors.Foggy}
                style={[
                  styles.input,
                  { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
                  phoneNumber && {
                    borderWidth: 2,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                ]}
                onPress={handlePhoneNumberInput}
              />
            </View>
            <Text style={{ fontSize: 12 }}>
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
              데이터 요금이 부과됩니다.
            </Text>
            <Pressable style={styles.continueBtn}>
              <Text style={styles.continueText}>계속</Text>
            </Pressable>

            {/* 하단 로그인 */}
          </View>
          <HorizontalLine text="또는" />
          <View style={styles.bottomContainer}>
            <View>
              {loginAsset.map((item, idx) => (
                <LoginButton key={idx} text={item.name} type={item.key} />
              ))}
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  topText: {
    fontSize: 15,
    fontWeight: "700",
  },
  closeButton: {
    position: "absolute",
    left: 0,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: wp(4),
  },
  middleContainer: {
    padding: wp(5),
    gap: hp(3),
  },
  bottomContainer: {
    padding: wp(5),
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: hp(2),
  },
  continueBtn: {
    backgroundColor: colors.Rausch,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: hp(2.5),
  },
  continueText: {
    color: "white",
    fontSize: hp(2),
    fontWeight: 700,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.LightGray,
  },
});
