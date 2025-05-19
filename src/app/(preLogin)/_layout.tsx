import { Stack } from "expo-router";

export default function PreLoginLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="chooseUser" />
    </Stack>
  );
}