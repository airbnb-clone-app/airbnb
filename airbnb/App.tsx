import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/navigation/LoginScreen";
import SignupScreen from "./src/navigation/SignupScreen";
import NavigationBar from "./src/common/NavigationBar";
import LodgeListScreen from "./src/lodge/LodgeListScreen";
import LodgeDetailScreen from "./src/lodge/LodgeDetailScreen";

const Stack = createNativeStackNavigator();

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
