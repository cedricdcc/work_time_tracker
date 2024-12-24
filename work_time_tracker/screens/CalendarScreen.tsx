import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavbar from '../components/MainNavbar';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text>Calendar Screen</Text>
      <MainNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
