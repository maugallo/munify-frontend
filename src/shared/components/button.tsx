import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ButtonProps = {
    text: string;
    onPress?: () => void;
    className?: string;
    textClassName?: string;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
} & TouchableOpacityProps

export default function Button({ text, onPress, className, textClassName, iconRight, iconLeft }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}
            className={`flex-row items-center justify-center gap-3 rounded-lg px-4 py-3 ${className}`}
        >
            {iconLeft && <View>{iconLeft}</View>}
            <Text className={`text-center ${textClassName}`}>{text}</Text>
            {iconRight && <View>{iconRight}</View>}
        </TouchableOpacity>
    );
}