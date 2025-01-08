import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/navigation/LoginScreen";
import SignupScreen from "./src/navigation/SignupScreen";
import NavigationBar from "./src/common/NavigationBar";
import LodgeListScreen from "./src/lodge/LodgeListScreen";
import LodgeDetailScreen from "./src/lodge/LodgeDetailScreen";

// 네비게이션 스택 타입 정의
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
  LodgeList: undefined;
  LodgeDetail: { firstimage: string; title: string }; // LodgeDetail에 파라미터 추가
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Main"
          component={NavigationBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        <Stack.Screen name="LodgeList" component={LodgeListScreen} />
        <Stack.Screen name="LodgeDetail" component={LodgeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
