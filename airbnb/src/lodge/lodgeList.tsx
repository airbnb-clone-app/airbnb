import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { listStyle } from "../styles/LodgeList.js";

//API키키
const API_KEY =
  "W%2BT4hsezl9G4EbOmMo%2BMCYNdA0eCp2kKYi7Uw03zJXVo%2FMULg1GksVtNFW3cG5YHaKhdkGxy25BOhFkasmcAgw%3D%3D";

//임의로 지정한거거
const location = [
  { name: "멋진 수영장", icon: "" },
  { name: "컬처 아이콘", icon: "" },
  { name: "해변 바로 앞", icon: "" },
  { name: "방", icon: "" },
  { name: "디자인", icon: "" },
  { name: "트리하우스", icon: "" },
  { name: "한적한 시골", icon: "" },
  { name: "최고의 전망", icon: "" },
  { name: "한옥", icon: "" },
];
type locationProps = { name: string };

const RenderLocation = ({ name }: locationProps) => (
  <View>
    <Text>{name}</Text>
  </View>
);

//숙소 리스트 타입 지정정
type listProps = {
  addr1?: string;
  title?: string;
  firstimage?: string;
  firstimage2?: string;
};

//List render하는 컴포넌트
const RenderList = ({ addr1, title, firstimage }: listProps) => (
  <View>
    <Image source={{ uri: firstimage }} style={listStyle.image} />
    <Text>{title}</Text>
    <Text>{addr1}</Text>
  </View>
);

export default function LodgeList() {
  const [lodges, setLodges] = useState<any[]>([]);
  const [ok, setOk] = useState(false);
  const getLodgeList = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=AND&MobileApp=airbnb&serviceKey=${API_KEY}&_type=json&numOfRows=100`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setLodges(json.response.body.items.item);
      setOk(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getLodgeList();
  }, []);

  return (
    <View style={listStyle.container}>
      <View style={listStyle.top}>
        <Text>검색창</Text>
        <FlatList
          data={location}
          renderItem={({ item }) => <RenderLocation name={item.name} />}
          keyExtractor={(item) => item.name}
          horizontal
        />
      </View>
      <View style={listStyle.listContainer}>
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
