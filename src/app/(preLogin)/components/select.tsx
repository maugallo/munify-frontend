import { Picker } from '@react-native-picker/picker';
import { View } from "react-native";

export type SelectProps = {
    selectedValue: number | undefined;
    elements: { label: string, value: number | undefined }[];
    placeholderElement: { label: string, value: number | undefined };
    onValueChange: (value: any) => void;
    enabled?: boolean;
}

export default function Select({ selectedValue, onValueChange, elements, placeholderElement, enabled }: SelectProps) {
    return (
        <View className=' bg-white py-2 border rounded-lg border-gray-300'>
            <Picker enabled={enabled} selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                {selectedValue === undefined && (
                    <Picker.Item color='gray' label={placeholderElement.label} value={placeholderElement.value} />
                )}
                {elements.map((element, index) => (
                    <Picker.Item key={index} label={element.label} value={element.value} />
                ))}
            </Picker>
        </View>
    );
}