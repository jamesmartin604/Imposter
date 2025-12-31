import { Pressable, Text } from 'react-native';

export function PrimaryButton({
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
        backgroundColor: disabled ? '#CCC' : '#111',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 16,
      }}
    >
      <Text
        style={{
          color: '#FFF',
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
