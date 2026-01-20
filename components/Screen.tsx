import { SafeAreaView, View } from 'react-native';

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0b0f16',
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
