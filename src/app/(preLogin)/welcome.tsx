import Button from "@/src/components/button";
import WelcomeLogo from "@/src/components/illustrations/welcomeLogo";
import AntDesign from '@expo/vector-icons/AntDesign';

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-white h-full flex justify-between p-6">
      <Text className="font-poppins text-center text-[2rem] font-bold text-[#3E82F7] text-poppins">Munify</Text>

      <View>
        <WelcomeLogo className="self-center" />
        <Text className="mt-10 font-inter text-center text-[1.7rem] font-bold">Conectá con tu municipio de la forma más fácil</Text>
        <Text className="mt-6 font-inter text-center text-[1.2rem] font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>

      <Button text="Comenzar" onPress={message}
        className="bg-[#3E82F7] h-16 rounded-lg"
        textClassName="font-inter text-white text-[1.5rem] font-bold mb-1"
        iconRight={<AntDesign name="rightcircleo" size={24} color="white" />}>
      </Button>
    </View>
  );
}

function message() {
  console.log('Pressed!')
}