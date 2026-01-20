import { Category } from '@/types/game';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

const CATEGORY_ICONS: Record<string, string> = {
    animals: '🐾',
    brands_and_logos: '🍎',
    colors_and_shapes: '🎨',
    countries_and_cities: '🌍',
    emotions_and_feelings: '❤️',
    everyday_objects: '🏠',
    famous_people: '⭐️',
    food_and_drink: '🍔',
    hobbies_and_activities: '🏌️‍♂️',
    internet_culture: '💻',
    kitchen_and_cooking: '🍳',
    movies_and_tv: '🎬',
    music_and_bands: '🎧',
    occupations: '💼',
    school_and_education: '🎓',
    science_and_tech: '🧪',
    sports: '⚽️',
    superheros: '🦸‍♂️',
    transportation: '🚗',
    video_games: '🎮',
    weather_and_nature: '☁️',   
};

type Props = {
  categories: Category[];
  onPress: () => void;
};

export function CategoryPreviewCard({ categories, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: '#131924',
        borderRadius: 16,
        padding: 16,
        opacity: pressed ? 0.9 : 1,

        // shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      })}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Ionicons
          name="grid-outline"
          size={18}
          color="#19E5D4"
          style={{ marginRight: 6 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#fff',
            fontFamily: 'Fontzilla',
          }}
        >
          Categories
        </Text>
      </View>

      {/* Featured categories */}
      {categories.map(category => (
        <View
          key={category.id}
          style={{
            borderWidth: 1,
            backgroundColor: '#252e3d',
            borderColor: '#7B899D',
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginRight: 8,
            }}
          >
            {CATEGORY_ICONS[category.id] || '📁'}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#7B899D',
            }}
          >
            {category.name}
          </Text>
        </View>
      ))}

      {/* Helper text */}
      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          color: '#777',
        }}
      >
        Tap to choose categories
      </Text>
    </Pressable>
  );
}
