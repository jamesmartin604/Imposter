import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Body, Title } from '@/components/Typography';
import { useRouter } from 'expo-router';

export default function StartScreen() {
  const router = useRouter();

  return (
    <Screen>
      <Title>Game Started!</Title>
      <Body>Time to talk and catch the imposter.</Body>

      <PrimaryButton title="New Game" onPress={() => router.replace('/')} />
    </Screen>
  );
}
