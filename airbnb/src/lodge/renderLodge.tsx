import { Image, Text, View } from "react-native";
import { listStyle } from "../styles/LodgeList";

//숙소 리스트 타입 지정
type listProps = {
  addr1?: string;
  title?: string;
  firstimage?: string;
  firstimage2?: string;
};

//List render하는 컴포넌트
export default function RenderList({ addr1, title, firstimage }: listProps) {
  return (
    <View>
      <Image source={{ uri: firstimage }} style={listStyle.image} />
      <Text>{title}</Text>
      <Text>{addr1}</Text>
    </View>
  );
}
