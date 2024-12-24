import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import MainNavbar from '../components/MainNavbar';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Navigate to LoginScreen on successful logout
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Welcome!</Text>
      <Button title="Logout" onPress={handleLogout} />
      <MainNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
