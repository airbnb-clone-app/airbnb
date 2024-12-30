import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, globalStyles } from "../styles/Global";
//네비게이션에 쓰일 아이콘
import Search from "../assets/images/search.svg";
import Heart from "../assets/images/heart.svg";
import Airbnb from "../assets/images/airbnb.svg";
import Message from "../assets/images/message.svg";
import Profile from "../assets/images/profile.svg";
import LodgeList from "../lodge/LodgeListScreen";

const Tab = createBottomTabNavigator();
//네비게이션 배열
const navArray = [
  {
    name: "검색",
    icon: Search,
    screen: () => <LodgeList />, //검색창, 숙소 리스트
  },
  {
    name: "위시리스트",
    icon: Heart,
    screen: () => <View>Wishlist Screen</View>,
  },
  { name: "여행", icon: Airbnb, screen: () => <View>Travel Screen</View> },
  {
    name: "메시지",
    icon: Message,
    screen: () => <View>Message Screen</View>,
  },
  {
    name: "프로필",
    icon: Profile,
    screen: () => <View>Profile Screen</View>,
  },
];

export default function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.Rausch,
        tabBarInactiveTintColor: colors.Hof,
      }}
    >
      {navArray.map((item, idx) => (
        <Tab.Screen
          key={idx}
          name={item.name}
          component={item.screen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              const iconColor = focused ? colors.Rausch : "black";
              const strokeWidth = idx === 3 || idx === 4 ? "2" : "1";
              return (
                <item.icon
                  width={size}
                  height={size}
                  stroke={iconColor}
                  fill="none"
                  strokeWidth={strokeWidth}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
