import { CategoryPreviewCard } from '@/components/CategoryPreviewCard';
import { PlayerInput } from '@/components/PlayerInput';
import { PlayerList } from '@/components/PlayerList';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Typography';
import { useGame } from '@/context/GameContext';
import { categories } from '@/data/categories';
import { useRouter } from 'expo-router';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();

  const { players, setPlayers } = useGame();
 
  const { selectedCategories } = useGame();

  const selectedCategoryObjects = categories.filter(cat=>
    selectedCategories.includes(cat.id)
  );
   const featuredCategories = selectedCategoryObjects.slice(0,3);

  const canStart =
    players.length >= 3 &&
    players.length <= 20 &&
    selectedCategories.length > 0;

  return (
    <KeyboardAvoidingView
      style={{ flex:1, backgroundColor: '#0b0f16'}}
      behavior={Platform.OS ==='ios'?'padding':undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{paddingBottom:24, flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          style={{ backgroundColor: '#0b0f16', flex: 1 }}
        >
              <Screen>
                <Title>IMPOSTER</Title>

                <PlayerInput
                  playerCount={players.length}
                  onAdd={name =>
                    setPlayers(prev => [
                      ...prev,
                      { id: Date.now().toString(), name },
                    ])
                  }
                />

                <PlayerList
                  players={players}
                  onRemove={id =>
                    setPlayers(prev => prev.filter(p => p.id !== id))
                  }
                />
                <CategoryPreviewCard
                  categories={featuredCategories}
                  onPress={() => router.push('/categories')}
                />

                <PrimaryButton
                  title="Start Game"
                  disabled={!canStart}
                  onPress={() =>
                    router.push({
                      pathname: '/reveal',
                      params: {
                        players: JSON.stringify(players),
                        categories: JSON.stringify(selectedCategories),
                      },
                    })
                  }
                />
              </Screen>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
   

  );
}
