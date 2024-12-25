import { Pressable, Text, View } from "react-native";

export default function LoginScreen({ navigation }:any) {
  return (
    <View>
      <Text>Login</Text>
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Text>메인이동</Text>
      </Pressable>
    </View>
  );
}
