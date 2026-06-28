import { CategorySelector } from '@/components/CategorySelector';
import { Screen } from '@/components/Screen';
import { useGame } from '@/context/GameContext';
import { categories } from '@/data/categories';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function CategoriesScreen() {
  const router = useRouter();
  const { selectedCategories, setSelectedCategories } = useGame();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Pressable
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.back();
            }}
            hitSlop={10}
            style={{
              padding: 4,
              borderWidth: 1,
              borderColor: '#7B899D',
              borderRadius: 8,
              backgroundColor: '#252e3d',
            }}
          >
            <Ionicons name="chevron-back" size={28} color="#19E5D4" />
          </Pressable>
          <Text
            style={{
              flex: 1,
              fontSize: 28,
              fontWeight: '700',
              textAlign: 'center',
              fontFamily: 'Fontzilla',
              color: '#FFFFFF',
              marginRight: 36,
            }}
          >
            Choose Categories
          </Text>
        </View>

        {/* Category grid */}
        <CategorySelector
          categories={categories}
          selected={selectedCategories}
          onToggle={id =>
            setSelectedCategories(prev =>
              prev.includes(id)
                ? prev.filter(c => c !== id)
                : [...prev, id]
            )
          }
        />

        {/* DONE BUTTON */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.back();
          }}
          style={{
            marginTop: 16,
            paddingVertical: 14,
            borderRadius: 12,
            backgroundColor: '#19E5D4',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Done
          </Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
