import { StyleSheet, Text, View } from 'react-native';

export function FirstToSpeakCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>First to speak</Text>
      <Text style={styles.name}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 48,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#1C1C1E', // bg-card equivalent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8, // Android shadow
  },
  label: {
    marginBottom: 8,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#9CA3AF', // muted-foreground
    fontWeight: '500',
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#19E5D4', // primary
    fontFamily: 'Fontzilla', // if you’re using it elsewhere
  },
});
