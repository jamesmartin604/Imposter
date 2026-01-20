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
          color: '#ffffffff',
          marginBottom: 6,
          fontFamily: 'Fontzilla',
        }}
      >
     <Ionicons
        name="people-outline"
        size={16}
        color="#19E5D4"
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
          placeholder="Enter player name..."
          placeholderTextColor="#7B899D"
          onSubmitEditing={handleAdd}
          editable={playerCount < maxPlayers}
          style={{
            flex: 1,
            height: 48,
            borderWidth: 1,
            borderColor: '#7B899D',
            borderRadius: 12,
            paddingHorizontal: 12,
            fontSize: 16,
            backgroundColor: '#252e3d',
            color: '#ffffff',
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
                ? '#252e3d'
                : '#7B899D', //#7B899D
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
            color: '#7B899D',
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
