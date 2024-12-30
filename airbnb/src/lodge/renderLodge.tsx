import { Image, Text, View, Pressable } from "react-native";
import { listStyle } from "../styles/LodgeList";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { itemsStyle } from "./../styles/LodgeItem";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//숙소 리스트 타입 지정
type listProps = {
  addr1?: string;
  title?: string;
  firstimage?: string;
  firstimage2?: string;
  price?: number;
  onPress: () => void;
};

//List render하는 컴포넌트
export default function RenderLodge({
  addr1,
  title,
  firstimage,
  price,
  onPress,
}: listProps) {
  addr1 === ""
    ? "주소 정보가 없습니다."
    : (addr1 = addr1?.split(" ").slice(0, 2).join(" "));
  return (
    <Pressable onPress={onPress}>
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
          <View>
            <Text style={itemsStyle.addr}>{addr1}</Text>
          </View>
          <View style={itemsStyle.review}>
            <FontAwesome
              name="star"
              size={15}
              color="black"
              style={{
                alignSelf: "center",
                paddingTop: 3,
                marginRight: 5,
              }}
            />
            <Text style={itemsStyle.star}>4.8</Text>
          </View>
        </View>
        <Text style={itemsStyle.title}>{title}</Text>
        <View style={itemsStyle.priceContainer}>
          <Text style={itemsStyle.price}>₩{price}</Text>
          <Text style={itemsStyle.price2}> /박</Text>
        </View>
      </View>
    </Pressable>
  );
}
