import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
    title?: string;
    text: string;
};

export function SpeakCard({ title, text }: CardProps) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#252e3d',
    padding: 12,
    width: 220,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 16,
    marginVertical: 20,
    marginBottom: 40,
    shadowColor: '#19E5D4',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1,
    color: '#9ca3af',
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Fontzilla',
    fontWeight: '600',
    color: '#19E5D4',
  },
});

