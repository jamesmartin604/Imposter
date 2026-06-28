import { CategoryPreviewCard } from '@/components/CategoryPreviewCard';
import { PlayerInput } from '@/components/PlayerInput';
import { PlayerList } from '@/components/PlayerList';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Typography';
import { useGame } from '@/context/GameContext';
import { categories } from '@/data/categories';
import { useRouter } from 'expo-router';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { maxImposters } from '@/utils/gameLogic';


export default function HomeScreen() {
  const router = useRouter();

  const { players, setPlayers, selectedCategories, allowHints, setAllowHints, imposterCount, setImposterCount } = useGame();
  const maxCount = maxImposters(players.length);
  const effectiveCount = Math.min(imposterCount, maxCount);

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

                <Pressable
                  onPress={() => setAllowHints(h => !h)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#252e3d',
                    borderColor: allowHints ? '#19E5D4' : '#7B899D',
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    marginTop: 16,
                  }}
                >
                  <Text style={{ color: '#cccccc', fontSize: 16, fontWeight: '600' }}>
                    Allow Hints
                  </Text>
                  <Text style={{ color: allowHints ? '#19E5D4' : '#7B899D', fontSize: 14 }}>
                    {allowHints ? 'On' : 'Off'}
                  </Text>
                </Pressable>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#252e3d',
                    borderColor: '#7B899D',
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    marginTop: 16,
                  }}
                >
                  <Text style={{ color: '#cccccc', fontSize: 16, fontWeight: '600' }}>
                    Imposters
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <Pressable
                      onPress={() => setImposterCount(c => Math.max(1, c - 1))}
                      disabled={effectiveCount <= 1}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        backgroundColor: effectiveCount <= 1 ? '#1a2030' : '#19E5D4',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ color: effectiveCount <= 1 ? '#7B899D' : '#0b0f16', fontSize: 20, fontWeight: '700', lineHeight: 24 }}>−</Text>
                    </Pressable>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', minWidth: 16, textAlign: 'center' }}>
                      {effectiveCount}
                    </Text>
                    <Pressable
                      onPress={() => setImposterCount(c => Math.min(maxCount, c + 1))}
                      disabled={effectiveCount >= maxCount}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        backgroundColor: effectiveCount >= maxCount ? '#1a2030' : '#19E5D4',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ color: effectiveCount >= maxCount ? '#7B899D' : '#0b0f16', fontSize: 20, fontWeight: '700', lineHeight: 24 }}>+</Text>
                    </Pressable>
                  </View>
                </View>

                <PrimaryButton
                  title="Start Game"
                  disabled={!canStart}
                  onPress={() =>
                    router.push({
                      pathname: '/reveal',
                      params: {
                        players: JSON.stringify(players),
                        categories: JSON.stringify(selectedCategories),
                        allowHints: JSON.stringify(allowHints),
                        imposterCount: JSON.stringify(effectiveCount),
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
