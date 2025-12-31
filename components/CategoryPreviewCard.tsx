import { Category } from '@/types/game';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

type Props = {
  categories: Category[];
  onPress: () => void;
};

export function CategoryPreviewCard({ categories, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        opacity: pressed ? 0.9 : 1,

        // shadow
        shadowColor: '#000',
        shadowOpacity: 0.06,
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
          color="#444"
          style={{ marginRight: 6 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#444',
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
            backgroundColor: '#e5e5e5',
            borderColor: '#E5E5E5',
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#111',
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
