import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { detailStyle } from "./../styles/LodgeDetail";
import Feather from "@expo/vector-icons/Feather";
import DetailIcon from "./DetailIcon";
import { globalStyles, SCREEN_WIDTH } from "./../styles/Global";
// 네비게이션 스택 타입 정의
type RootStackParamList = {
  LodgeDetail: { firstimage: string; title: string };
};

// Props에 타입 정의
type Props = StackScreenProps<RootStackParamList, "LodgeDetail">;

export default function LodgeDetail({ route, navigation }: Props) {
  const { firstimage, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // 기본 헤더 숨기기
    });
  }, [navigation]);

  return (
    <View style={detailStyle.Container}>
      {/* 커스텀 헤더 */}
      <View style={{ height: 500, backgroundColor: "transparent" }}>
        <Image
          source={{ uri: firstimage }}
          style={{ width: "100%", height: 500 }}
        />
        <View style={{ position: "absolute" }}>
          <DetailIcon
            onPress={() => navigation.goBack()}
            left={20}
            iconName="arrow-left"
          />
          <View>
            <DetailIcon
              onPress={() => console.log("Share pressed")}
              left={SCREEN_WIDTH - 100}
              iconName="share-2"
            />
            <DetailIcon
              onPress={() => console.log("Favorite pressed")}
              left={SCREEN_WIDTH - 60}
              iconName="heart"
            />
          </View>
        </View>
      </View>
      {/* 나머지 화면 내용 */}
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
        <Text>{firstimage}</Text>
      </View>
    </View>
  );
}
