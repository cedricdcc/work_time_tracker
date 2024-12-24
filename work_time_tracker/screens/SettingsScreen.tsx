import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavbar from '../components/MainNavbar';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <MainNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
