import "../../global.css";

import { Stack } from "expo-router";
import { useLoadFonts } from "../shared/hooks/useLoadFonts";

export default function RootLayout() {
  const [fontsLoaded, error] = useLoadFonts();
  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(preLogin)" options={{headerShown: false}} />
    </Stack>
  );
}