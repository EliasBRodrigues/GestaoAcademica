import { Stack } from 'expo-router';
export default function HomeScreen() {
  return (
      <Stack>
        <Stack.Screen name='screens' options={{headerShown:false}} />
      </Stack>
  );
}