import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
    const { userType } = useLocalSearchParams();

    return (
    <View className="h-full items-center justify-center">
      <Text className="text-[2rem] font-poppins-bold">
        Login para: {userType === "employee" ? "Municipio" : "Ciudadano"}
      </Text>
    </View>
  );
}