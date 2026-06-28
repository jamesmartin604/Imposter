import { GameProvider } from '@/context/GameContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

function SplashScreen({ onDone }: { onDone: () => void }) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(onDone);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[StyleSheet.absoluteFill, styles.splash, { opacity }]}>
      <Text style={styles.title}>BLUFF</Text>
    </Animated.View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Fontzilla: require('../assets/fonts/Fontzilla-Comic.ttf'),
  });
  const [splashDone, setSplashDone] = useState(false);

  if (!fontsLoaded) return null;

  return (
    <GameProvider>
      <Stack screenOptions={{ headerShown: false }} />
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#0b0f16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Fontzilla',
    fontSize: 64,
    color: '#19E5D4',
    letterSpacing: 6,
  },
});
