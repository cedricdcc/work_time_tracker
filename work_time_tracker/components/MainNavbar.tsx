import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MainNavbar() {
  const navigation = useNavigation();
  const route = useRoute();

  const getIconColor = (routeName: string) => {
    return route.name === routeName ? 'white' : 'black';
  };

  const getBackgroundColor = (routeName: string) => {
    return route.name === routeName ? 'blue' : 'transparent';
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[styles.iconContainer, { backgroundColor: getBackgroundColor('Home') }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={24} color={getIconColor('Home')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, { backgroundColor: getBackgroundColor('Calendar') }]}
        onPress={() => navigation.navigate('Calendar')}
      >
        <Ionicons name="calendar" size={24} color={getIconColor('Calendar')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, { backgroundColor: getBackgroundColor('Settings') }]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings" size={24} color={getIconColor('Settings')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
