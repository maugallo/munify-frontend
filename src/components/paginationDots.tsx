import { View } from 'react-native';

type PaginationDotsProps = {
  activeIndex: number;
};

export default function PaginationDots({ activeIndex }: PaginationDotsProps) {
  return (
    <View className="flex-row gap-2 items-center justify-center">
      <View className={activeIndex === 0 ? "w-8 h-2 rounded-full bg-primary" : "w-8 h-2 rounded-full bg-gray-300"} />
      <View className={activeIndex === 1 ? "w-8 h-2 rounded-full bg-primary" : "w-8 h-2 rounded-full bg-gray-300"} />
      <View className={activeIndex === 2 ? "w-8 h-2 rounded-full bg-primary" : "w-8 h-2 rounded-full bg-gray-300"} />
    </View>
  );
}
