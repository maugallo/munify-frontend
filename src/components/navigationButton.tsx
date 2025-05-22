import { Text, TouchableOpacity } from "react-native";

type NextButtonProps = {
    text: string;
    className: string;
    onPress?: () => void;
    activeOpacity: number;
};

export default function NavigationButton({ text, className, onPress, activeOpacity }: NextButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
            <Text className={`${className} text-lg font-inter-semibold`}>{text}</Text>
        </TouchableOpacity>
    );
}