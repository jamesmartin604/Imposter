import { Category } from '@/types/game';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

type Props = {
  categories: Category[];
  selected: string[];
  onToggle: (id: string) => void;
};

const CATEGORY_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
    animals: 'paw',
    brands_and_logos: 'logo-apple',
    colors_and_shapes: 'color-palette',
    countries_and_cities: 'globe',
    emotions_and_feelings: 'heart',
    everyday_objects: 'home',
    famous_people: 'star',
    food_and_drink: 'restaurant',
    hobbies_and_activities: 'golf',
    internet_culture: 'laptop',
    kitchen_and_cooking: 'restaurant',
    movies_and_tv: 'film',
    music_and_bands: 'headset',
    occupations: 'briefcase',
    school_and_education: 'school',
    science_and_tech: 'flask',
    sports: 'football',
    superheros: 'globe',
    transportation: 'car',
    video_games: 'game-controller',
    weather_and_nature: 'cloud',   
}

export function CategorySelector({
  categories,
  selected,
  onToggle,
}: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      {categories.map(category => {
        const isSelected = selected.includes(category.id);

        return (
          <Pressable
            key={category.id}
            onPress={() => onToggle(category.id)}
            accessibilityRole="button"
            accessibilityLabel={`Toggle ${category.name}`}
            style={({ pressed }) => ({
              width: '32%', // ✅ 3 per row
              marginBottom: 9,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 10,
              backgroundColor: isSelected ? '#595959' : '#FFF',
              borderWidth: 1,
              borderColor: isSelected ? '#383838' : '#DDD',

              // subtle shadow
              shadowColor: '#000',
              shadowOpacity: isSelected ? 0.08 : 0.04,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 1 },
              elevation: isSelected ? 2 : 1,

              opacity: pressed ? 0.85 : 1,
            })}
          >
            {/* Category name */}

            <Ionicons
              name={CATEGORY_ICONS[category.id]??'grid'}
              size={16}
              color={isSelected ? '#FFF' : '#555'}
              style={{ marginBottom: 4 }}
            />

            <Text
              numberOfLines={2}
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: isSelected ? '#FFF' : '#111',
              }}
            >
              {category.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
