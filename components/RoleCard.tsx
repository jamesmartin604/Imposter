import { Text, View } from 'react-native';

const cardStyle = {
  padding: 80,
  borderRadius: 16,
  alignItems: 'center' as const,
  backgroundColor: '#252e3d',
  borderColor: '#7B899D',
  borderWidth: 1,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 4,
};

export function RoleCard({
  isImposter,
  word,
  hint,
  showHint = true,
}: {
  isImposter: boolean;
  word: string;
  hint: string;
  showHint?: boolean;
}) {
  return (
    <View style={cardStyle}>
      {isImposter ? (
        <>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#e05555', fontFamily: 'Fontzilla' }}>
            IMPOSTER
          </Text>
          {showHint && (
            <Text style={{ marginTop: 8, fontSize: 16, color: '#e05555' }}>
              Hint: {hint}
            </Text>
          )}
        </>
      ) : (
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#4da6e8' }}>
          {word}
        </Text>
      )}
    </View>
  );
}
