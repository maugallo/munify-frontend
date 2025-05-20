import Header from '@/src/components/header';
import PaginationDots from '@/src/components/paginationDots';
import UserTypeButton from '@/src/components/userTypeButton';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function ChooseUser() {
  const [userType, setUserType] = useState<'employee' | 'citizen'>('citizen');

  return (
    <View className="bg-gray-100 h-full flex justify-between pb-10 pt-14 px-8">
      <View>
        <Header position="start" />
        <Text className="font-inter-bold text-primary text-[2rem] mt-8">Soy...</Text>
        
        <UserTypeButton
            title="Ciudadano"
            subtitle="Lorem ipsum bla bla bla"
            Icon={<FontAwesome6 name="person-shelter" size={54} color={userType === 'citizen' ? "white" : "#3E82F7"} />}
            active={userType === 'citizen'}
            onPress={() => setUserType('citizen')}
        />

        <UserTypeButton
          title="Empleado Municipal"
          subtitle="Lorem ipsum bla bla bla"
          Icon={<MaterialCommunityIcons name="bank" size={54} color={userType === 'employee' ? "white" : "#3E82F7"} />}
          active={userType === 'employee'}
          onPress={() => setUserType('employee')}
        />
      </View>

      <View>
        <PaginationDots activeIndex={0} />
      </View>
    </View>
  );
}
