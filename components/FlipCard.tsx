import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

type Props = {
  flipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
};

export function FlipCard({ flipped, front, back }: Props) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: flipped ? 180 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [flipped]);

  const frontRotation = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backRotation = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          { transform: [{ rotateY: frontRotation }] },
        ]}
      >
        {front}
      </Animated.View>

      <Animated.View
        style={[
          styles.card,
          styles.back,
          { transform: [{ rotateY: backRotation }] },
        ]}
      >
        {back}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220, // ✅ reserves space so layout works
    width: '100%',
  },
  card: {
    position: 'absolute',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  back: {
    transform: [{ rotateY: '180deg' }],
  },
});
