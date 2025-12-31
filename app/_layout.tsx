import { GameProvider } from '@/context/GameContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Fontzilla: require('../assets/fonts/Fontzilla-Comic.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or splash screen
  }

  return (
    <GameProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GameProvider>
  );
}
