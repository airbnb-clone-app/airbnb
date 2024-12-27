import { Image, Text, View } from "react-native";
import { listStyle } from "../styles/LodgeList";
import { itemsStyle } from "../styles/LodgeItem";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//숙소 리스트 타입 지정
type listProps = {
  addr1?: string;
  title?: string;
  firstimage?: string;
  firstimage2?: string;
};

//List render하는 컴포넌트
export default function RenderList({ addr1, title, firstimage }: listProps) {
  addr1 === ""
    ? "주소 정보가 없습니다."
    : (addr1 = addr1?.split(" ").slice(0, 2).join(" "));
  return (
    <View>
      {firstimage === "" ? (
        <Image
          source={require("../assets/images/default.png")}
          style={itemsStyle.image}
        />
      ) : (
        <Image source={{ uri: firstimage }} style={itemsStyle.image} />
      )}
      <View style={itemsStyle.bodyContainer}>
        <View style={itemsStyle.addrContainer}>
          <Text style={itemsStyle.addr}>{addr1}</Text>
          <View style={itemsStyle.review}>
            <FontAwesome name="star" size={24} color="black" />
            <Text>4.8</Text>
          </View>
        </View>
        <Text>{title}</Text>
      </View>
    </View>
  );
}
