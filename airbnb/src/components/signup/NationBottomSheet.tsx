import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HorizontalLine from "../common/HorizontalLine";
import { colors } from "../../styles/Global";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsNationMouse,
  setSelectedNation,
} from "../../modules/redux/slice/nationSlice";

export default function NationBottomSheet() {
  const countries = getCountries();

  const dispatch = useDispatch();

  //국가 전화번호 코드 매핑
  const countryData = countries.map((country) => ({
    country,
    callingCode: getCountryCallingCode(country),
  }));
  type ItemProps = { callingCode: string; country: string };

  //아이템 설정
  const Item = ({ callingCode, country }: ItemProps) => {
    const [isSelected, setIsSelected] = useState(false);

    //국가 선택 시
    const handleSelectNation = (country: string) => {
      dispatch(setSelectedNation(country));
      dispatch(setIsNationMouse(false));
    };

    return (
      <View style={styles.Container}>
        <View style={styles.row}>
          <View style={styles.subContainer}>
            <Text style={styles.text}>{country}</Text>
            <Text style={styles.text}>(+{callingCode})</Text>
          </View>
          <TouchableOpacity
            style={[styles.circle, isSelected && styles.circleSelected]}
            onPress={() => handleSelectNation(country)}
          >
            {isSelected && <View style={styles.circleAfter} />}
          </TouchableOpacity>
        </View>
        {/* 하단 실선 */}
        <View style={styles.line} />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={countryData}
        keyExtractor={(item) => item.country}
        renderItem={({ item }) => (
          <Item callingCode={item.callingCode} country={item.country} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    paddingVertical: hp(2),
    gap: wp(1),
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: hp(2),
  },
  Container: {
    flexDirection: "column",
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: wp(90),
    height: 1,
    backgroundColor: colors.LightGray,
    marginTop: hp(1),
  },
  circle: {
    width: hp(3),
    height: hp(3),
    borderRadius: hp(1.5),
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  circleSelected: {
    backgroundColor: "black",
    borderColor: "black",
  },
  circleAfter: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(0.75),
    backgroundColor: "white",
  },
});
