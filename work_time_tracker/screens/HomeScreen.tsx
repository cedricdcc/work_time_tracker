import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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

  const handleRegisterWork = () => {
    navigation.navigate('RegisterWork');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.registerWorkButton} onPress={handleRegisterWork}>
        <Text style={styles.registerWorkButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <MainNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerWorkButton: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  registerWorkButtonText: {
    fontSize: 24,
    color: 'white',
  },
  logoutButtonContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
});
