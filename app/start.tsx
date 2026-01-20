import { FirstToSpeakCard } from '@/components/FirstToSpeakCard';
import { Screen } from '@/components/Screen';
import { SecondaryButton } from '@/components/SecondaryButton';
import { Start, Title } from '@/components/Typography';
import { useRouter } from 'expo-router';

export default function StartScreen() {
  const router = useRouter();

  return (
    <Screen>
      <Title>Game Started!</Title>
      <Start>Time to talk and catch the imposter.</Start>
      <FirstToSpeakCard />

      <SecondaryButton title="Start New Game" onPress={() => router.replace('/')} />
    </Screen>
  );
}