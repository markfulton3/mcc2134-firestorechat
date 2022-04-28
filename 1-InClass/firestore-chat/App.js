import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { auth, db } from './lib/firebase';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {

  
  return (
        <View style={styles.container}>
            <Text>Screen needs to be updated...</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 100,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },  
});
