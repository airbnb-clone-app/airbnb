import React from "react";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

type DetailIconProps = {
  onPress: () => void; // 버튼 클릭 시 호출할 함수
  left: number; // 아이콘의 왼쪽 위치
  iconName: FeatherIconName; // Feather 아이콘 이름
};

export default function DetailIcon({
  onPress,
  left,
  iconName,
}: DetailIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        top: 40,
        left: left,
        padding: 8,
        backgroundColor: "white",
        borderRadius: 100, // 원형으로 설정
      }}
    >
      <Feather name={iconName} size={18} color="black" />
    </TouchableOpacity>
  );
}
