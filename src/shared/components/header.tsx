import { Text } from "react-native";

type HeaderProps = {
    position: 'start' | 'center' | 'end';
}

export default function Header({ position }: HeaderProps) {
    return (
        <Text className={`font-poppins-bold text-${position} text-[2.5rem] text-primary`}>Munify</Text>
    );
}