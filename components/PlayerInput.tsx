import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

type Props = {
  onAdd: (name: string) => void;
  playerCount: number;
  maxPlayers?: number;
};

export function PlayerInput({
  onAdd,
  playerCount,
  maxPlayers = 20,
}: Props) {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name.trim() || playerCount >= maxPlayers) return;
    onAdd(name.trim());
    setName('');
  };

  const remaining = Math.max(0, 3 - playerCount);

  return (
    <View style={{ marginBottom: 16 }}>
      {/* Counter */}

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#444',
          marginBottom: 6,
          fontFamily: 'Fontzilla',
        }}
      >
     <Ionicons
        name="people-outline"
        size={16}
        color="#444"
        style={{ marginBottom: 6 ,marginRight: 6}}
        
      />
        Players ({playerCount} / {maxPlayers})
      </Text>

      {/* Input + Add Button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Player name"
          placeholderTextColor="#999"
          onSubmitEditing={handleAdd}
          editable={playerCount < maxPlayers}
          style={{
            flex: 1,
            height: 48,
            borderWidth: 1,
            borderColor: '#DDD',
            borderRadius: 12,
            paddingHorizontal: 12,
            fontSize: 16,
            backgroundColor: '#FFF',
          }}
        />

        <Pressable
          onPress={handleAdd}
          disabled={!name.trim() || playerCount >= maxPlayers}
          style={{
            marginLeft: 8,
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor:
              !name.trim() || playerCount >= maxPlayers
                ? '#CCC'
                : '#111',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 24,
              fontWeight: '600',
              lineHeight: 24,
            }}
          >
            +
          </Text>
        </Pressable>
      </View>

      {/* Helper Text */}
      {playerCount < 3 && (
        <Text
          style={{
            marginTop: 6,
            fontSize: 13,
            color: '#888',
          }}
        >
          {remaining === 3
            ? 'Add at least 3 players'
            : `Add at least ${remaining} more player${
                remaining > 1 ? 's' : ''
              }`}
        </Text>
      )}
    </View>
  );
}
