import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  PanResponder,
  Dimensions,
  FlatList,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { listStyle } from "../styles/LodgeList.js";
import RenderLodge from "./renderLodge.tsx";
import { colors } from "../styles/Global.js";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";

// API 키
const API_KEY =
  "W%2BT4hsezl9G4EbOmMo%2BMCYNdA0eCp2kKYi7Uw03zJXVo%2FMULg1GksVtNFW3cG5YHaKhdkGxy25BOhFkasmcAgw%3D%3D";

// // 위치 목록 데이터
// const location = [
//   { name: "멋진 수영장" },
//   { name: "컬처 아이콘" },
//   { name: "해변 바로 앞" },
//   { name: "방" },
//   { name: "디자인" },
//   { name: "트리하우스" },
//   { name: "한적한 시골" },
//   { name: "최고의 전망" },
//   { name: "한옥" },
// ];

// // 위치 항목 렌더링 컴포넌트
// const RenderLocation = ({ name }: { name: string }) => (
//   <View>
//     <Text>{name}</Text>
//   </View>
// );
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
//숙소 리스트 타입 지정
type RootStackParamList = {
  LodgeDetail: {
    addr1?: string;
    title?: string;
    firstimage?: string;
    firstimage2?: string;
    price?: number;
  };
};

export default function LodgeList() {
  // 숙소 데이터 상태
  const [lodges, setLodges] = useState<any[]>([]);
  const [ok, setOk] = useState(false);
  const [drag, setDrag] = useState(false);
  const [height, setHeight] = useState(1);

  const translateY = useRef(new Animated.Value(0)).current;

  const BOTTOM_LIMIT = SCREEN_HEIGHT * 0.75;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > 5;
    },

    onPanResponderMove: (_, gestureState) => {
      if (!drag && gestureState.dy >= 0) {
        // 드래그 아래로
        translateY.setValue(gestureState.dy);
      } else if (drag && gestureState.dy <= 0) {
        // 드래그 위로
        translateY.setValue(BOTTOM_LIMIT + gestureState.dy);
      }
    },

    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > BOTTOM_LIMIT / 4) {
        // 아래로 스냅
        Animated.spring(translateY, {
          toValue: BOTTOM_LIMIT,
          useNativeDriver: true,
        }).start();
        setDrag(true);
        setHeight(0);
      } else if (gestureState.dy < -BOTTOM_LIMIT / 4) {
        // 위로 스냅
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        setDrag(false);
        setHeight(0.1);
      } else {
        const targetValue = drag ? BOTTOM_LIMIT : 0;
        Animated.spring(translateY, {
          toValue: targetValue,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  type Lodge = {
    contentid: string;
    title: string;
    addr1: string;
    firstimage: string;
    // 필요한 다른 속성들을 여기에 추가
  };

  const getRandomPrice = (id: string | number) => {
    const min = 50000; // 최소 가격: 5만원
    const max = 200000; // 최대 가격: 20만원
    const hash = Array.from(id.toString()).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );

    const randomFactor = Math.random() * (max - min); // 0부터 (max-min) 사이의 값
    const calculatedPrice = ((hash + randomFactor) % (max - min + 1)) + min; // 고유 ID 기반으로 범위 내에서 랜덤 값 생성

    return Math.round(calculatedPrice); // 반올림하여 가격을 정수로 반환
  };

  const getLodgeList = async () => {
    try {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=AND&MobileApp=airbnb&serviceKey=${API_KEY}&_type=json&numOfRows=500`
      );
      if (!response.ok) throw new Error("네트워크 응답 오류");

      const json = await response.json();

      const lodgesWithPrice = json.response.body.items.item.map(
        (lodge: Lodge) => ({
          ...lodge,
          price: getRandomPrice(lodge.contentid).toLocaleString("ko-KR"),
        })
      );

      setLodges(lodgesWithPrice.sort(() => Math.random() - 0.5));
      setOk(true);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    getLodgeList();
  }, []);
  type NavigationProp = StackNavigationProp<RootStackParamList, "LodgeDetail">;
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={listStyle.container}>
      <View style={listStyle.background}>
        <View style={listStyle.top}>
          {/* <FlatList
            data={location}
            renderItem={({ item }) => <RenderLocation name={item.name} />}
            keyExtractor={(item) => item.name}
            horizontal
          /> */}
        </View>

        {ok ? (
          <Animated.FlatList
            {...panResponder.panHandlers}
            style={[listStyle.listContainer, { transform: [{ translateY }] }]}
            scrollEnabled={height !== 0}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View>
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
                      style={{
                        marginLeft: 20,
                        color: colors.Foggy,
                        fontSize: 14,
                      }}
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
              </View>
            }
            data={lodges}
            renderItem={({ item }) => (
              <RenderLodge
                addr1={item.addr1}
                title={item.title}
                firstimage={item.firstimage || ""}
                price={item.price}
                onPress={() =>
                  navigation.navigate("LodgeDetail", {
                    addr1: item.addr1,
                    title: item.title,
                    firstimage: item.firstimage,
                    price: item.price,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.contentid || item.title}
          />
        ) : (
          <View>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
      </View>
    </View>
  );
}
