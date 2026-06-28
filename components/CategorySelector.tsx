import * as Haptics from 'expo-haptics';
import { Category } from '@/types/game';
import { Pressable, Text, View } from 'react-native';

type Props = {
  categories: Category[];
  selected: string[];
  onToggle: (id: string) => void;
};

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
        justifyContent: 'center',
        marginBottom: 20,
      }}
    >
      {categories.map(category => {
        const isSelected = selected.includes(category.id);

        return (
          <Pressable
            key={category.id}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onToggle(category.id);
            }}
            accessibilityRole="button"
            accessibilityLabel={`Toggle ${category.name}`}
            style={({ pressed }) => ({
              width: '85%',
              alignSelf: 'center', 
              marginBottom: 8,
              paddingVertical: 9,
              paddingHorizontal: 8,
              borderRadius: 16,
              backgroundColor: isSelected ? 'rgba(25, 229, 212, 0.18)' : '#2A2A2D',
              borderWidth: 1,
              borderColor: isSelected ? '#19E5D4' : '#3A3A3D',

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
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text
              style={{
                fontSize:18,
                marginRight:10,
                lineHeight:20,
              }}
              >
                {CATEGORY_ICONS[category.id]??'🧩'}
              </Text>

            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: isSelected ? '#19E5D4' : '#CFCFCF',
              }}
            >
              {category.name}
            </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
