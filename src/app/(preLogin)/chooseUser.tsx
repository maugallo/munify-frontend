import NavigationButton from '@/src/app/(preLogin)/components/navigationButton';
import PaginationDots from '@/src/app/(preLogin)/components/paginationDots';
import UserTypeButton from '@/src/app/(preLogin)/components/userTypeButton';
import Header from '@/src/shared/components/header';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Select from './components/select';

export default function ChooseUser() {
  const [step, setStep] = useState<0 | 1>(0);
  const [userType, setUserType] = useState<'employee' | 'citizen'>();
  const [provinceId, setProvinceId] = useState<number | undefined>(undefined);
  const [municipalityId, setMunicipalityId] = useState<number | undefined>(undefined);

  /* Datos Mockeados */
  const provinces = [
    {label: 'Buenos Aires', value: 1},
    {label: 'Chubut', value: 2}
  ];
  const municipalities = [
    {label: 'Exaltación de la Cruz', value: 1},
    {label: 'Chubut', value: 2}
  ];

  const back = () => {
    if (step === 0)
      router.back();
    if (step === 1)
      setStep(0);
  }
  const next = () => {
    if (step === 0 && userType)
      setStep(1);
    if (step === 1 && municipalityId)
      router.push(`/(auth)/login/${userType}`);
  }

  function setOpacity() {
    if (step === 0)
      return userType ? 0.4 : 1;
    if (step === 1)
      return municipalityId ? 0.4 : 1;
    return 0;
  }
  function setClass() {
    if (step === 0)
      return userType ? 'text-primary' : 'text-[#3e82f775]';
    if (step === 1)
      return municipalityId ? 'text-primary' : 'text-[#3e82f775]'
    return '';
  }

  return (
    <View className="bg-gray-100 h-full flex justify-between pb-10 pt-14 px-8">
      <View>
        <Header position="start" />
        {step === 0 && (
          <>
            <Text className="font-inter-bold text-primary text-[2rem] mt-8">Soy...</Text>

            <UserTypeButton title="Ciudadano" subtitle="Participá, informate y hacé oír tu voz en tu comunidad."
              Icon={<FontAwesome6 name="person-shelter" size={54} color={userType === 'citizen' ? "white" : "#3E82F7"} />}
              active={userType === 'citizen'}
              onPress={() => setUserType('citizen')} />

            <UserTypeButton title="Municipio" subtitle="Trabajá por una ciudad más cercana y ordenada."
              Icon={<MaterialCommunityIcons name="bank" size={54} color={userType === 'employee' ? "white" : "#3E82F7"} />}
              active={userType === 'employee'}
              onPress={() => setUserType('employee')} />
          </>
        )}
        {step === 1 && (
          <>
            <Text className="font-inter-bold text-primary text-[2rem] mt-8">Seleccioná tu Municipio</Text>

            <View className='mt-8'>
              <Select elements={provinces} placeholderElement={{label: 'Provincias', value: undefined}}
              onValueChange={(value) => setProvinceId(value)} selectedValue={provinceId}>
              </Select>
            </View>

            <View className='mt-8'>
              <Select elements={municipalities} placeholderElement={{label: 'Municipios', value: undefined}}
               enabled={provinceId ? true : false} onValueChange={(value) => setMunicipalityId(value)} selectedValue={municipalityId}>
              </Select>
            </View>
          </>
        )}
      </View>

      <View className='flex flex-row justify-between gap-14'>
        <NavigationButton className='text-primary'
          onPress={back} text='Volver'
          activeOpacity={0.4}>
        </NavigationButton>

        <PaginationDots activeIndex={step} />

        <NavigationButton className={setClass()}
          onPress={next} text='Siguiente'
          activeOpacity={setOpacity()}>
        </NavigationButton>
      </View>
    </View>
  );
}
