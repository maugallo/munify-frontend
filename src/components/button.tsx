import { ReactNode } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

type ButtonProps = {
    text: string;
    onPress?: () => void;
    className?: string;
    textClassName?: string;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
} & PressableProps

export default function Button({ text, onPress, className, textClassName, iconRight, iconLeft }: ButtonProps) {
    return (
        <Pressable onPress={onPress} className={`flex flex-row justify-center items-center gap-3 ${className}`} >
            {iconLeft && <View>{iconLeft}</View>}
            <Text className={`text-center ${textClassName}`}>{text}</Text>
            {iconRight && <View>{iconRight}</View>}
        </Pressable>
    );
}