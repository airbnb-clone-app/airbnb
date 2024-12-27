import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  PanResponder,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { listStyle } from "../styles/LodgeList.js";
import RenderList from "./renderLodge.tsx";
import { colors } from "../styles/Global";
// API 키
const API_KEY =
  "W%2BT4hsezl9G4EbOmMo%2BMCYNdA0eCp2kKYi7Uw03zJXVo%2FMULg1GksVtNFW3cG5YHaKhdkGxy25BOhFkasmcAgw%3D%3D";

// 위치 목록 데이터
const location = [
  { name: "멋진 수영장" },
  { name: "컬처 아이콘" },
  { name: "해변 바로 앞" },
  { name: "방" },
  { name: "디자인" },
  { name: "트리하우스" },
  { name: "한적한 시골" },
  { name: "최고의 전망" },
  { name: "한옥" },
];
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
// 위치 항목 렌더링 컴포넌트
const RenderLocation = ({ name }: { name: string }) => (
  <View>
    <Text>{name}</Text>
  </View>
);

export default function LodgeList() {
  // 숙소 데이터 상태
  const [lodges, setLodges] = useState<any[]>([]);
  const [ok, setOk] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;

  // 드래그 가능한 뷰가 멈출 높이
  const BOTTOM_LIMIT = SCREEN_HEIGHT * 0.75;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > 5;
    },

    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy >= 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    // 드래그를 놓았을 때 처리
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > BOTTOM_LIMIT / 2) {
        // 하단으로 스냅
        Animated.spring(translateY, {
          toValue: BOTTOM_LIMIT,
          useNativeDriver: true,
        }).start();
      } else {
        // 원래 위치로 스냅
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  // 숙소 데이터 가져오기
  const getLodgeList = async () => {
    console.log("데이터 가져오는 중...");
    try {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=AND&MobileApp=airbnb&serviceKey=${API_KEY}&_type=json&numOfRows=100`
      );

      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다");
      }
      const json = await response.json();
      setLodges(json.response.body.items.item);
      setOk(true);
    } catch (error) {
      console.error("데이터 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    getLodgeList();
  }, []);

  return (
    <View style={listStyle.container}>
      <View style={listStyle.background}>
        <View style={listStyle.top}>
          <FlatList
            data={location}
            renderItem={({ item }) => <RenderLocation name={item.name} />}
            keyExtractor={(item) => item.name}
            horizontal
          />
        </View>

        <Animated.View
          {...panResponder.panHandlers}
          style={[listStyle.listContainer, { transform: [{ translateY }] }]}
        >
          <ScrollView>
            <View style={listStyle.gap}>
              <View
                style={{
                  backgroundColor: colors.Foggy,
                  height: 4,
                  width: 50,
                  opacity: 0.7,
                  marginTop: 10,
                  borderRadius: 20,
                }}
              ></View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  marginTop: 20,
                }}
              >
                해변 바로 앞 숙소 1,000개 이상
              </Text>
            </View>
            <View style={listStyle.bottomLine}></View>
            <View style={listStyle.informationContainer}>
              <View style={listStyle.information}>
                <Text
                  style={{ marginLeft: 20, color: colors.Foggy, fontSize: 14 }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    회사 상세정보
                  </Text>
                  <Text> 및 </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    이용 약관
                  </Text>
                </Text>
              </View>
            </View>
            {ok ? (
              <FlatList
                data={lodges}
                renderItem={({ item }) => (
                  <RenderList
                    addr1={item.addr1}
                    title={item.title}
                    firstimage={item.firstimage}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <View>
                <ActivityIndicator size="large" color="black" />
              </View>
            )}
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
