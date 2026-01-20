import { Player } from '@/types/game';
import { Pressable, Text, View } from 'react-native';

type Props = {
  players: Player[];
  onRemove: (id: string) => void;
};

export function PlayerList({ players, onRemove }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      {players.map(player => (
        <View
          key={player.id}
          style={{
            width: '48%', // two per row
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#252e3d',
            borderRadius: 24,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginBottom: 8,

            // subtle shadow
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 1 },
            elevation: 1,
          }}
        >
          {/* Name */}
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#ffffff',
              marginRight: 6,
            }}
          >
            {player.name}
          </Text>

          {/* Remove */}
          <Pressable
            onPress={() => onRemove(player.id)}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${player.name}`}
            style={({ pressed }) => ({
              width: 28,
              height: 28,
              borderRadius: 14,
              justifyContent: 'center',
              alignItems: 'center',
              
            })}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#D32F2F',
                fontWeight: '600',
                lineHeight: 16,
              }}
            >
              ✕
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
