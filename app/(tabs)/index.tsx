import { CategorySelector } from '@/components/CategorySelector';
import { PlayerInput } from '@/components/PlayerInput';
import { PlayerList } from '@/components/PlayerList';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Category, ChooseCategory, Title } from '@/components/Typography';
import { useGame } from '@/context/GameContext';
import { categories, featuredCategoryIds } from '@/data/categories';
import { useRouter } from 'expo-router';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, TouchableWithoutFeedback } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();

  const { players, setPlayers } = useGame();
  const featuredCategories = categories.filter(cat=>featuredCategoryIds.includes(cat.id));
  const { selectedCategories, setSelectedCategories } = useGame();

  const canStart =
    players.length >= 3 &&
    players.length <= 20 &&
    selectedCategories.length > 0;

  return (
    <KeyboardAvoidingView
      style={{ flex:1}}
      behavior={Platform.OS ==='ios'?'padding':undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{paddingBottom:24}}
          keyboardShouldPersistTaps="handled"
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

                <Category>Categories</Category>
                <CategorySelector
                  categories={featuredCategories}
                  selected={selectedCategories}
                  onToggle={id =>
                    setSelectedCategories(prev =>
                      prev.includes(id)
                        ? prev.filter(c => c !== id)
                        : [...prev, id]
                    )
                  }
                />

                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: '/categories',
                        params: {
                          selected: JSON.stringify(selectedCategories),
                        },
                      })
                    }
                    style={{ marginTop: 8 }}
                  >
                    <ChooseCategory>Choose categories →</ChooseCategory>
                  </Pressable>

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
