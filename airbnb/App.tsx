import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/navigation/LoginScreen";
import SignupScreen from "./src/navigation/SignupScreen";
import NavigationBar from "./src/common/NavigationBar";
import { Provider } from "react-redux";
import { nationStore } from "./src/modules/redux/nationStore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={nationStore}>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Main"
            component={NavigationBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
