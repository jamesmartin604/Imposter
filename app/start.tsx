import { Screen } from '@/components/Screen';
import { SecondaryButton } from '@/components/SecondaryButton';
import { SpeakCard } from '@/components/SpeakCard';
import { Start, Title } from '@/components/Typography';
import { Player } from '@/types/game';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';

export default function StartScreen() {
  const router = useRouter();
  const { players } = useLocalSearchParams<{ players: string }>();
  const parsedPlayers: Player[] = JSON.parse(players);
  const randomPlayer = parsedPlayers[Math.floor(Math.random() * parsedPlayers.length)];

  return (
    <Screen>
      <Title>Game Started!</Title>
      <Start>Time to talk and catch the imposter.</Start>
      <View style={{ alignItems: 'center' }}>
        <SpeakCard title="FIRST TO SPEAK" text={randomPlayer.name} />
      </View>
      <Start>Take turns describing the word. Find the imposter through discussion and voting!</Start>
      

      <SecondaryButton title="Start New Game" onPress={() => router.replace('/')} />
    </Screen>
  );
}