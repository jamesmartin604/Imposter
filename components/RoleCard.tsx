import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';

export function RoleCard({
  isImposter,
  word,
  hint,
}: {
  isImposter: boolean;
  word: string;
  hint: string;
}) {
  return (
    <>
      {isImposter ? (
        <LinearGradient
          colors={['hsl(0, 70%, 45%)', 'hsl(330, 70%, 40%)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            padding: 80,
            borderRadius: 16,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 4,
          }}
        >
          <Text style={{
            fontSize: 22, fontWeight: '700', color: '#FFF', fontFamily: 'Fontzilla'
          }}>
            IMPOSTER
          </Text>
          <Text style={{ marginTop: 8, fontSize: 16, color: '#fff' }}>
            Hint: {hint}
          </Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['hsl(175, 80%, 40%)', 'hsl(200, 80%, 45%)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            padding: 80,
            borderRadius: 16,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#fff' }}>
            {word}
          </Text>
        </LinearGradient>
      )}
    </>
  );
}
