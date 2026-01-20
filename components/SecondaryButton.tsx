import { Pressable, Text } from 'react-native';

export function SecondaryButton({
  title,
  onPress,
  disabled,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#0b0f16' : '#0b0f16',
        paddingVertical: 14,
        borderRadius: 12,
        borderColor: '#7B899D',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20,
        marginRight: 40,
        marginLeft: 40,
      }}
    >
      <Text
        style={{
          color: '#FFF',
          fontSize: 16,
          fontWeight: '700',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
