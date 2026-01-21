import { FlipCard } from '@/components/FlipCard';
import { PrimaryButton } from '@/components/PrimaryButton';
import { RoleCard } from '@/components/RoleCard';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Typography';
import { categories } from '@/data/categories';
import { Player } from '@/types/game';
import { selectImposter, selectWord } from '@/utils/gameLogic';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';


export default function RevealScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const players: Player[] = JSON.parse(params.players as string);
  const selectedCategoryIds: string[] = JSON.parse(
    params.categories as string
  );

  const selectedCategories = categories.filter(cat =>
    selectedCategoryIds.includes(cat.id)
  );

  const [imposter] = useState(() => selectImposter(players));
  const [{ word, hint }] = useState(() => selectWord(selectedCategories));


  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentPlayer = players[index];
  const isImposter = currentPlayer.id === imposter.id;

  return (
    <Screen>
        <Title>{currentPlayer.name}</Title>

        <Pressable
          onPressIn={() => setRevealed(true)}
          onPressOut={() => setRevealed(false)}
          style={{ marginBottom: 24 }}
        >
          <FlipCard
            flipped={revealed}
            front={
              <View
                style={{
                  backgroundColor: '#252e3d',
                  padding: 80,
                  borderColor: '#7B899D',
                  borderWidth: 1,
                  borderRadius: 16,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 22, color: '#cccccc', fontWeight: '600' }}>
                  Hold to Reveal
                </Text>
                <Text style={{ fontSize: 14, color: '#7B899D', marginTop: 4 }}>
                  Only {currentPlayer.name} should see this
                </Text>
              </View>
            }
            back={
              <RoleCard
                isImposter={isImposter}
                word={word}
                hint={hint}
              />
            }
            />
          </Pressable>


        <PrimaryButton
          title="Next Player"
          onPress={() => {
            setRevealed(false);
            if (index + 1 < players.length) {
              setIndex(i => i + 1);
            } else {
              router.replace({
                pathname: '/start',
                params: {
                  players: JSON.stringify(players),
                },
              })
            }
          }}
        />
    </Screen>
  );
}
