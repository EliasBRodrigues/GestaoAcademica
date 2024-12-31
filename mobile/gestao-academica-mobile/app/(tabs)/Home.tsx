import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.titleContainer}>
        
      <Link href="/(tabs)/(login)/login">Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    top: 100
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
