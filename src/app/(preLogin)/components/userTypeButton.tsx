import { Pressable, Text, View } from 'react-native';

type UserTypeButtonProps = {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
  active: boolean;
  onPress?: () => void
};

export default function UserTypeButton({title, subtitle, Icon, active, onPress}: UserTypeButtonProps) {
  return (
    <Pressable onPress={onPress}
      className={`${active ? "bg-primary" : "bg-white"} h-[25%] flex-row items-center justify-center gap-3 rounded-xl px-4 mt-8`}
    >
      {Icon}
      <View className="max-w-[70%] flex justify-start">
        <Text className={`${active ? "text-white" : "text-primary"} font-poppins-bold text-[1.3rem]`}>
          {title}
        </Text>
        <Text className={`${active ? "text-white" : "text-gray-500"} font-poppins-semibold text-[1rem]`}>
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}
