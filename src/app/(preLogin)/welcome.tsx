import Button from "@/src/components/button";
import Header from "@/src/components/header";
import WelcomeLogo from "@/src/components/illustrations/welcomeLogo";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Welcome() {
  return (
    <View className="bg-gray-100 h-full flex justify-between pb-10 pt-14 px-8">
      <Header position="center" />

      <View>
        <View className="self-center"><WelcomeLogo/></View>
        <Text className="mt-10 font-poppins-semibold text-center text-[1.6rem]">Conectá con tu municipio de la forma más fácil</Text>
        <Text className="mt-6 font-inter-semibold text-center text-[1.2rem] text-gray-500">Gestioná reclamos, recibí anuncios y participá en tu comunidad desde una sola app.</Text>
      </View>

      <Button text="Comenzar" onPress={navigate}
        className="bg-primary h-16 rounded-lg"
        textClassName="font-poppins-semibold text-white text-[1.5rem]"
        iconRight={<AntDesign name="rightcircleo" size={24} color="white" />}>
      </Button>
    </View>
  );
}

function navigate() {
  router.push("/(preLogin)/chooseUser");
}