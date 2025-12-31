import { Text, View } from 'react-native';

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
    <View
      style={{
        backgroundColor: '#FFF',
        padding: 32,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
      }}
    >
      {isImposter ? (
        <>
          <Text style={{
            fontSize: 22, fontWeight: '700', color: '#D32F2F', fontFamily: 'Fontzilla'
          }}>
            You are the Imposter
          </Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>
            Hint: {hint}
          </Text>
        </>
      ) : (
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          {word}
        </Text>
      )}
    </View>
  );
}
