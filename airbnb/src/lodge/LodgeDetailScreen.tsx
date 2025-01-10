import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { detailStyle } from "./../styles/LodgeDetail";
import Feather from "@expo/vector-icons/Feather";
import DetailIcon from "./DetailIcon";
import { globalStyles, SCREEN_WIDTH } from "./../styles/Global";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// 네비게이션 스택 타입 정의
type RootStackParamList = {
  LodgeDetail: { firstimage: string; title: string; addr1: string };
};

// Props에 타입 정의
type Props = StackScreenProps<RootStackParamList, "LodgeDetail">;

export default function LodgeDetail({ route, navigation }: Props) {
  const { firstimage, title, addr1 } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // 기본 헤더 숨기기
    });
  }, [navigation]);
  return (
    <ScrollView>
      {/*헤더 */}
      <View style={{ height: 290, backgroundColor: "transparent" }}>
        <Image
          source={{ uri: firstimage }}
          style={{ width: "100%", height: 290 }}
        />
        <View style={{ position: "absolute" }}>
          <DetailIcon
            onPress={() => navigation.goBack()}
            left={15}
            iconName="arrow-left"
          />
          <View>
            <DetailIcon
              onPress={() => console.log("Share pressed")}
              left={SCREEN_WIDTH - 93}
              iconName="share-2"
            />
            <DetailIcon
              onPress={() => console.log("Favorite pressed")}
              left={SCREEN_WIDTH - 49}
              iconName="heart"
            />
          </View>
        </View>
      </View>
      {/* 숙소 이름, 주소, 리뷰 */}
      <View style={detailStyle.contentContainer}>
        <Text style={detailStyle.title}>{title}</Text>
        <Text style={detailStyle.addr}>
          {addr1?.split(" ").slice(1, 2).join(" ")}의 숙소
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          magni perspiciatis quaerat reprehenderit. Est amet sequi perspiciatis
          nihil cumque hic dolores cupiditate, quisquam recusandae magni animi
          numquam blanditiis enim illum?
        </Text>
        <View style={detailStyle.reviewCnt}>
          <FontAwesome
            name="star"
            size={15}
            color="black"
            style={{ width: 20, marginVertical: 4 }}
          />
          <Text style={detailStyle.reviewText}>후기 2개</Text>
        </View>
      </View>
    </ScrollView>
  );
}
