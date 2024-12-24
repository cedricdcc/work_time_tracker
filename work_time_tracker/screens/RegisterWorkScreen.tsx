import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavbar from '../components/MainNavbar';

const RegisterWorkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Register Work Screen here</Text>
      <MainNavbar />
    </View>
  );
};

export default RegisterWorkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
