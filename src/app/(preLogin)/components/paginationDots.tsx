import { View } from 'react-native';

type PaginationDotsProps = {
  activeIndex: number;
};

export default function PaginationDots({ activeIndex }: PaginationDotsProps) {
  return (
    <View className="flex-row items-center gap-2">
      <View className={activeIndex === 0 ? "w-8 h-2 rounded-full bg-primary" : "w-4 h-2 rounded-full bg-gray-300"} />
      <View className={activeIndex === 1 ? "w-8 h-2 rounded-full bg-primary" : "w-4 h-2 rounded-full bg-gray-300"} />
    </View>
  );
}
