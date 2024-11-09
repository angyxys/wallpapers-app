import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text>Home</Text>
    </View>
  );
}
