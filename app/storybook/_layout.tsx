import { Stack } from "expo-router";

const StorybookLayout = () => (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="index" />
  </Stack>
);

export default StorybookLayout;
