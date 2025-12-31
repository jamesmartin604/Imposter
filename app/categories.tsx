import { CategorySelector } from '@/components/CategorySelector';
import { Screen } from '@/components/Screen';
import { useGame } from '@/context/GameContext';
import { categories } from '@/data/categories';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

export default function CategoriesScreen() {
  const router = useRouter();
  const { selectedCategories, setSelectedCategories } = useGame();

  return (
    <Screen>
      {/* Title */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
        >
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 4,
          fontFamily: 'Fontzilla',
          marginTop: 12,
          textAlign: 'center',
          
        }}
      >
        SELECT CATEGORIES
      </Text>
      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          marginBottom: 16,
          color: '#777',
          textAlign: 'center',
        }}
      >
        Choose one or more categories for the game
      </Text>

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
        onPress={() => router.back()}
        style={{
          marginTop: 16,
          paddingVertical: 14,
          borderRadius: 12,
          backgroundColor: '#111',
          alignItems: 'center',
          marginRight: 24,
          marginLeft: 24,
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
