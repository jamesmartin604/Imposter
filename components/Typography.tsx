import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export function Title({ children }: { children: string }) {
  return (
    <Text
      style={{
        fontFamily: 'Fontzilla',
        fontSize: 48,
        fontWeight: '700',
        color: '#111',
        marginBottom: 16,
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  );
}

export function Body({ children }: { children: string }) {
  return (
    <Text
      style={{
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
      }}
    >
      {children}
    </Text>
  );
}

export function Category({ children }: { children: string }) {
  return (
    <Text
      style={{
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
        fontWeight: '100',
        fontFamily: 'Fontzilla',
      }}
    >
        <Ionicons
        name="grid"
        size={16}
        color="#444"
        style={{ marginBottom: 6 }}
        />
      {children}
    </Text>
  );
}

export function ChooseCategory({ children }: { children: string }) {
  return (
    <Text
      style={{
        fontSize: 14,
        color: '#444',
        marginBottom: 8,
      }}
    >
      {children}
    </Text>
  );
}

