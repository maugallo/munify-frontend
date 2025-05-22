import Header from '@/src/components/header';
import NavigationButton from '@/src/components/navigationButton';
import PaginationDots from '@/src/components/paginationDots';
import UserTypeButton from '@/src/components/userTypeButton';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function ChooseUser() {
  const [userType, setUserType] = useState<'employee' | 'citizen'>();

  return (
    <View className="bg-gray-100 h-full flex justify-between pb-10 pt-14 px-8">
      <View>
        <Header position="start" />
        <Text className="font-inter-bold text-primary text-[2rem] mt-8">Soy...</Text>

        <UserTypeButton
          title="Ciudadano"
          subtitle="Participá, informate y hacé oír tu voz en tu comunidad."
          Icon={<FontAwesome6 name="person-shelter" size={54} color={userType === 'citizen' ? "white" : "#3E82F7"} />}
          active={userType === 'citizen'}
          onPress={() => setUserType('citizen')}
        />

        <UserTypeButton
          title="Municipio"
          subtitle="Trabajá por una ciudad más cercana y ordenada."
          Icon={<MaterialCommunityIcons name="bank" size={54} color={userType === 'employee' ? "white" : "#3E82F7"} />}
          active={userType === 'employee'}
          onPress={() => setUserType('employee')}
        />
      </View>

      <View className='flex flex-row justify-end'>
        <View className='flex flex-row gap-14'>
          <PaginationDots activeIndex={0} />

          <NavigationButton className={userType ? 'text-primary' : 'text-[#3e82f775]'}
            onPress={() => navigate(userType)} text='Siguiente'
            activeOpacity={userType ? 0.4 : 1}>
          </NavigationButton>
        </View>
      </View>
    </View>
  );
}

function navigate(userType: 'employee' | 'citizen' | undefined) {
  if (userType) router.push(`/(auth)/login/${userType}`);
}